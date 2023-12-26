package com.kosta268.eco_connect.service.member;

import com.kosta268.eco_connect.dto.member.*;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.entity.member.RefreshToken;
import com.kosta268.eco_connect.entity.mission.MemberMission;
import com.kosta268.eco_connect.entity.point.Point;
import com.kosta268.eco_connect.jwt.TokenProvider;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import com.kosta268.eco_connect.repository.member.RefreshTokenRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional

public class MemberService {
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final RefreshTokenRepository refreshTokenRepository;

    // join
    public MemberResponseDto join(MemberRequestDto memberRequestDto) throws Throwable {
//        if (memberRepository.existsMemberById(memberRequestDto.getId())) {
//            throw new IllegalArgumentException("이미 가입되어 있는 유저입니다.");
//        }
        Member member = memberRequestDto.applyPasswordEncoder(passwordEncoder);

        return MemberResponseDto.fromEntity(memberRepository.save(member));
    }

    // login
    public TokenResponseDto login(MemberRequestDto memberRequestDto, HttpServletResponse response) {
        // 1. Login ID/PW 를 기반으로 AuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken = memberRequestDto.toAuthentication();

        // 2. 검증 (사용자 비밀번호 체크)
        // authenticate 메서드가 실행될 때, CustomUserDetailsService 에서 만든 loadUserByUsername 메서드 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // 4. RefreshToken 저장
        RefreshToken refreshToken = RefreshToken.builder()
                .key(authentication.getName())
                .value(tokenDto.getRefreshToken())
                .build();

        // 5. RefreshToken -> DB 저장
        refreshTokenRepository.save(refreshToken);

        // 6. RefreshToken -> 쿠키 저장
        Cookie cookie = tokenProvider.createCookie(refreshToken.getValue());
        response.addCookie(cookie);
        log.info("login cookie : {}", cookie);
        log.info("login accessToken : {}", tokenDto.getAccessToken());

        // 7. TokenResponseDto 생성 및 발급
        return TokenResponseDto.builder()
                .grantType(tokenDto.getGrantType())
                .accessToken(tokenDto.getAccessToken())
                .accessTokenExpiresIn(tokenDto.getAccessTokenExpiresIn())
                .build();
    }

    // reissue
    public TokenResponseDto reissue(TokenReissueRequestDto tokenReissueRequestDto,
                                    HttpServletRequest request, HttpServletResponse response) throws Throwable {
        // 1. Refresh Token 검증
//        if (!tokenProvider.validateToken(tokenReissueDto.getRefreshToken())) {
//            throw new IllegalArgumentException("Refresh Token이 유효하지 않습니다.");
//        }
        String cookieRefreshToken = tokenProvider.getCookie(request);

        if (!tokenProvider.validateToken(cookieRefreshToken)) {
            throw new IllegalArgumentException("Refresh Token이 유효하지 않습니다.");
        }

        // 2. Access Token 에서 User ID 가져오기
        Authentication authentication = tokenProvider.getAuthentication(tokenReissueRequestDto.getAccessToken());

        // 3. 저장소에서 User ID를 기반으로 Refresh Token 값 가져오기
        RefreshToken refreshToken = refreshTokenRepository.findById(authentication.getName())
                .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

        // 4. Refresh Token 일치하는지 검사
        if (!refreshToken.getValue().equals(cookieRefreshToken)) {
            throw new IllegalArgumentException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        // 5. 새로운 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

        // 6. 저장소 정보 업데이트
        RefreshToken newRefreshToken = refreshToken.updateValue(tokenDto.getRefreshToken());
        refreshTokenRepository.save(newRefreshToken);

        // 7. 쿠키 정보 업데이트
        Cookie cookie = tokenProvider.createCookie(newRefreshToken.getValue());
        response.addCookie(cookie);
        log.info("reissue cookie : {}", cookie);

        return TokenResponseDto.builder()
                .grantType(tokenDto.getGrantType())
                .accessToken(tokenDto.getAccessToken())
                .accessTokenExpiresIn(tokenDto.getAccessTokenExpiresIn())
                .build();
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) {
        String cookieRefreshToken = tokenProvider.getCookie(request);
        refreshTokenRepository.deleteByValue(cookieRefreshToken);
        Cookie cookie = tokenProvider.createCookie("");
        response.addCookie(cookie);
    }

    public Boolean findIdDuplicateMember(String id) {
        return memberRepository.existsMemberById(id);
    }

    public Boolean findEmailDuplicateMember(String email) {
        return memberRepository.existsMemberByEmail(email);
    }

    public MemberResponseDto findMemberEmail(String email) {
        Member findMember = memberRepository.findByEmail(email).orElseThrow(() -> new NoSuchElementException());

        return MemberResponseDto.fromEntity(findMember);
    }

    public Boolean findMemberIdAndEmail(String id, String email) {
        return memberRepository.existsByIdAndEmail(id, email);
    }

    public MemberResponseDto changeMemberPassword(MemberRequestDto memberRequestDto) {
        Member findMember = memberRepository.findById(memberRequestDto.getId()).orElseThrow(() -> new NoSuchElementException());
        findMember.setPassword(passwordEncoder.encode(memberRequestDto.getPassword()));

        return MemberResponseDto.fromEntity(memberRepository.save(findMember));
    }
    @Transactional(readOnly = true)
    public Member getMemberById(Long memberId) {
        return memberRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException("no such data"));
    }

    @Transactional(readOnly = true)
    public List<MemberMission> findMemberMissions(Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException("no such member"));

        return member.getMemberMissions();
    }
    @Transactional(readOnly = true)
    public Point findMemberPoint(Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException("no such member"));
        return member.getPoint();
    }
}
