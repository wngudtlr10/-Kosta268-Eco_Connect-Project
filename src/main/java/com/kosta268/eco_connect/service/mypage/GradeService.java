package com.kosta268.eco_connect.service.mypage;

import com.kosta268.eco_connect.entity.mypage.Grade;
import com.kosta268.eco_connect.repository.mypage.GradeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class GradeService {

  private final GradeRepository gradeRepository;

  public Grade findByMemberId(Long memberId) {
    Optional<Grade> optionalGrade = gradeRepository.findByMemberId(memberId);

    return optionalGrade.orElse(null);
  }

}
