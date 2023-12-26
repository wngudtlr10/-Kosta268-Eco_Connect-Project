package com.kosta268.eco_connect.service.mypage;

import com.kosta268.eco_connect.dto.mypage.MyinfoUpdateDto;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.repository.mypage.MypageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@Slf4j
public class MypageService {

  private final MypageRepository mypageRepository;
  private final PasswordEncoder passwordEncoder;

  @Autowired
  public MypageService(MypageRepository mypageRepository, PasswordEncoder passwordEncoder) {
    this.mypageRepository = mypageRepository;
    this.passwordEncoder = passwordEncoder;
  }


  // 회원 생성 메서드
  public void createUser(Member member) {
    mypageRepository.save(member);
  }

  // 회원 정보 조회 메서드
  public Member getMemberById(Long memberId) {
    Optional<Member> optionalMember = mypageRepository.findById(memberId);
    log.info("memberId: {}",memberId.getClass());
    return optionalMember.orElse(null);
  }

  // 비밀번호 확인 메서드
  public boolean checkPassword(Long memberId, String password) {
    Optional<Member> optionalMember = mypageRepository.findByMemberId(memberId);

    return optionalMember
        .map(member -> member.getPassword().equals(password))
        .orElse(false);
  }

  // 암호화된 비밀번호를 가져오는 메서드
  public String getStoredPassword(Long memberId) {
    Optional<Member> optionalMember = mypageRepository.findById(memberId);

    return optionalMember
        .map(Member::getPassword)
        .orElse(null);
  }


  // 회원 정보 업데이트 메서드
  public void updateMember(MyinfoUpdateDto myinfoUpdateDto) {
    Optional<Member> optionalMember = mypageRepository.findByMemberId(myinfoUpdateDto.getMemberId());

    if (optionalMember.isPresent()) {
      Member member = optionalMember.get();

      member.setProfile(myinfoUpdateDto.getProfile());
      member.setPhone(myinfoUpdateDto.getPhone());
      member.setPassword(myinfoUpdateDto.getPassword());

      mypageRepository.save(member);
    } else {
      log.error("해당 memberId에 대한 회원을 찾을 수 없습니다.");
      throw new RuntimeException("해당 memberId에 대한 회원을 찾을 수 없습니다.");
    }
  }

  // 회원 정보 삭제
  public void deleteMember(Long memberId) {
    mypageRepository.deleteById(memberId);
  }


}
