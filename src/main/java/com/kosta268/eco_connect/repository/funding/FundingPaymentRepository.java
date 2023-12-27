package com.kosta268.eco_connect.repository.funding;

import com.kosta268.eco_connect.entity.funding.FundingPaymentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FundingPaymentRepository extends JpaRepository<FundingPaymentEntity, Long> {
}
