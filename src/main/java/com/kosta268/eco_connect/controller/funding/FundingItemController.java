package com.kosta268.eco_connect.controller.funding;


import com.kosta268.eco_connect.entity.funding.FundingItemEntity;
import com.kosta268.eco_connect.service.funding.FundingItemService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/fundingItem")
public class FundingItemController {
    private FundingItemService fundingItemService;

    @Autowired
    public void FundingItemApiController(FundingItemService fundingItemService) {
        this.fundingItemService = fundingItemService;
    }

    //펀딩 상품 all 반환
    @GetMapping
    public ResponseEntity<List<FundingItemEntity>> getAllFundingItems() {
        List<FundingItemEntity> fundings = fundingItemService.getAllFundings();
        return ResponseEntity.ok(fundings);
    }

    //id로 특정 펀딩싱픔 검색
    @GetMapping("/{fundingItemId}")
    public ResponseEntity<FundingItemEntity> getFundingItemById(@PathVariable Long fundingItemId) {
        try {
            FundingItemEntity funding = fundingItemService.getFundingItemById(fundingItemId);
            return ResponseEntity.ok(funding);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


}
