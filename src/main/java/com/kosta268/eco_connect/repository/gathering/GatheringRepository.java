package com.kosta268.eco_connect.repository.gathering;

import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.entity.gathering.Gathering;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GatheringRepository extends JpaRepository<Gathering, Long> {
    Page<Gathering> findAllByStatusEquals(Status status, Pageable pageable);
    Page<Gathering> findByTitleLike(String title, Pageable pageable);
    Page<Gathering> findByStatusEqualsAndTitleLike(Status status, String title, Pageable pageable);

    Page<Gathering> findByCreator_MemberId(Long memberId, Pageable pageable);
}
