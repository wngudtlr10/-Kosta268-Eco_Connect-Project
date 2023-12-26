package com.kosta268.eco_connect.repository.point;

import com.kosta268.eco_connect.entity.point.Point;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PointRepository extends JpaRepository<Point, Long> {

  Optional<Point> findByMember_MemberId(Long memberId);

}
