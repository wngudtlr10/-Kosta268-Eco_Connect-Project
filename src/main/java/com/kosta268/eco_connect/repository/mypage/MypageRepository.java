package com.kosta268.eco_connect.repository.mypage;

import com.kosta268.eco_connect.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MypageRepository extends JpaRepository<Member, Long> {

  // MemberId 기준 회원정보 조회
  Optional<Member> findByMemberId(Long memberId);

}
