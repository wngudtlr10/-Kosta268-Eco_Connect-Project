package com.kosta268.eco_connect.service.funding;

import com.kosta268.eco_connect.entity.funding.Funding;
import com.kosta268.eco_connect.entity.funding.FundingItemEntity;
import com.kosta268.eco_connect.repository.funding.FundingItemRepository;
import com.kosta268.eco_connect.repository.funding.FundingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class FundingItemService {

    private final FundingRepository fundingRepository;
    private final FundingItemRepository fundingItemRepository;

    //펀딩 상품 전체 조회
    @Transactional(readOnly = true) //읽기전용 트랜잭션
    public List<FundingItemEntity> getAllFundings() {
        return fundingItemRepository.findAll();
    }

    //펀딩 상품 id 조회
    @Transactional(readOnly = true) //읽기전용 트랜잭션
    public FundingItemEntity getFundingItemById(Long fundingItemId) {
        FundingItemEntity funding = fundingItemRepository.findById(fundingItemId).orElse(null);
        log.info(String.format("ID %d에 대한 FundingItem을 가져옴: %s", fundingItemId, funding));
        return funding;
    }
}
