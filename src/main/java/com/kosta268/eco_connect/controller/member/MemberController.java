package com.kosta268.eco_connect.controller.member;

import com.kosta268.eco_connect.dto.gathering.GatheringDto;
import com.kosta268.eco_connect.dto.member.MemberRequestDto;
import com.kosta268.eco_connect.dto.member.MemberResponseDto;
import com.kosta268.eco_connect.dto.member.TokenReissueRequestDto;
import com.kosta268.eco_connect.dto.member.TokenResponseDto;
import com.kosta268.eco_connect.dto.mission.MemberMissionDto;
import com.kosta268.eco_connect.dto.point.PointDto;
import com.kosta268.eco_connect.entity.gathering.MemberGathering;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.entity.mission.MemberMission;
import com.kosta268.eco_connect.entity.point.Point;
import com.kosta268.eco_connect.security.CustomUserDetails;
import com.kosta268.eco_connect.service.member.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value="/api/member")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<MemberResponseDto> join(@RequestBody MemberRequestDto memberRequestDto) throws Throwable {
        log.debug("controller userJoinDto : {}", memberRequestDto);

        return ResponseEntity.ok(memberService.join(memberRequestDto));
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResponseDto> login(@RequestBody MemberRequestDto memberRequestDto,
                                                  HttpServletResponse response) {
        return ResponseEntity.ok(memberService.login(memberRequestDto, response));
    }

    @PostMapping("/reissue")
    public ResponseEntity<TokenResponseDto> reissue(@RequestBody TokenReissueRequestDto tokenReissueRequestDto,
                                                    HttpServletRequest request, HttpServletResponse response) throws Throwable {
        return ResponseEntity.ok(memberService.reissue(tokenReissueRequestDto, request, response));
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        memberService.logout(request, response);
    }

    @PostMapping("/find/id")
    public Boolean memberDuplicateIdFind(@RequestBody Map<String, String> idMap) {
        return memberService.findIdDuplicateMember(idMap.get("id"));
    }

    @PostMapping("/find/email")
    public Boolean memberDuplicateEmailFind(@RequestBody Map<String, String> emailMap) {
        return memberService.findEmailDuplicateMember(emailMap.get("email"));
    }

    @PostMapping("/find-id")
    public ResponseEntity<MemberResponseDto> memberIdFind(@RequestBody Map<String, String> emailMap) {
        log.warn("id : {}", emailMap.get("email"));
        return ResponseEntity.ok(memberService.findMemberEmail(emailMap.get("email")));
    }

    @PostMapping("/find-pw/member")
    public Boolean memberPwFind(@RequestBody Map<String, String> memberMap) {
        return memberService.findMemberIdAndEmail(memberMap.get("id"), memberMap.get("email"));
    }

    @PostMapping("/find-pw/change-pw")
    public ResponseEntity<MemberResponseDto> memberChangePw(@RequestBody MemberRequestDto memberRequestDto) {
        return ResponseEntity.ok(memberService.changeMemberPassword(memberRequestDto));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMe(@AuthenticationPrincipal CustomUserDetails userDetails) {
        log.info("userDetails = {}", userDetails);
        return ResponseEntity.ok(userDetails);
    }


    @GetMapping("/{memberId}/gatherings")
    public List<GatheringDto> getMemberGatherings(@AuthenticationPrincipal CustomUserDetails userDetails) {
        Member member = memberService.getMemberById(userDetails.getMemberId());
        List<MemberGathering> memberGatherings = member.getMemberGatherings();

        List<GatheringDto> gatheringDtos = memberGatherings.stream()
                .map(MemberGathering::getGathering)
                .map(GatheringDto::fromEntity)
                .collect(Collectors.toList());

        log.info("gatherings = {}", gatheringDtos);
        return gatheringDtos;
    }
    @GetMapping("/{memberId}/missions")
    public ResponseEntity<List<MemberMissionDto>> getMemberMissions(@AuthenticationPrincipal CustomUserDetails userDetails) {
        List<MemberMission> memberMissions = memberService.findMemberMissions(userDetails.getMemberId());
        List<MemberMissionDto> memberMissionDtos = memberMissions.stream()
                .map(MemberMissionDto::fromEntity)
                .collect(Collectors.toList());
        return ResponseEntity.ok(memberMissionDtos);
    }

    @GetMapping("/{memberId}/point")
    public ResponseEntity<PointDto> getMemberPoint(@AuthenticationPrincipal CustomUserDetails userDetails) {
        Point memberPoint = memberService.findMemberPoint(userDetails.getMemberId());
        PointDto pointDto = PointDto.fromEntity(memberPoint);
        return ResponseEntity.ok(pointDto);
    }
}
