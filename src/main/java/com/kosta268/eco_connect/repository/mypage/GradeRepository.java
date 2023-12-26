package com.kosta268.eco_connect.repository.mypage;

import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.entity.mypage.Grade;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GradeRepository extends JpaRepository<Grade, Long> {

  // MemberId 기준 회원정보 조회
  Optional<Grade> findByMemberId(Long memberId);

}
