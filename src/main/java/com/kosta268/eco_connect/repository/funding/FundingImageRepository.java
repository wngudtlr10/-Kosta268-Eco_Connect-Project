package com.kosta268.eco_connect.repository.funding;

import com.kosta268.eco_connect.entity.funding.FundingImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingImageRepository extends JpaRepository<FundingImageEntity, Long> {
}
