package com.kosta268.eco_connect.repository.mission;

import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.entity.mission.Mission;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MissionRepository extends JpaRepository<Mission, Long> {
    Page<Mission> findAllByTitleLike(String title, Pageable pageable);

    Page<Mission> findByCategoryLike(String category, Pageable pageable);

    Page<Mission> findByStatus(Status status, Pageable pageable);

    Page<Mission> findAllByStatusAndTitleLike(Status status, String title, Pageable pageable);
    Page<Mission> findAllByStatusAndCategoryLike(Status status, String category, Pageable pageable);

    Page<Mission> findAllByCategoryLikeAndTitleLike(String category, String title, Pageable pageable);

    Page<Mission> findAllByStatusAndTitleLikeAndCategoryLike(Status status, String title, String category, Pageable pageable);


}
