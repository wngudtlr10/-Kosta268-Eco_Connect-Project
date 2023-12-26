package com.kosta268.eco_connect.service.mypage;

import com.kosta268.eco_connect.entity.point.Point;
import com.kosta268.eco_connect.repository.point.PointRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class PointService {

  private final PointRepository pointRepository;

  public Point findByMemberId(Long memberId) {
    Optional<Point> optionalPoint = pointRepository.findByMember_MemberId(memberId);

    return optionalPoint.orElse(null);
  }

}
