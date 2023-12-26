package com.kosta268.eco_connect.repository.funding;

import com.kosta268.eco_connect.constant.ItemSellStatus;
import com.kosta268.eco_connect.entity.funding.Funding;
import com.kosta268.eco_connect.entity.funding.FundingItemEntity;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ExtendWith(SpringExtension.class)
@TestPropertySource(properties = {"spring.config.location=classpath:application-test.yml"})
public class FundingItemRepositoryTest {

    @Autowired
    FundingItemRepository fundingItemRepository;

    @Test

    @DisplayName("펀딩 상품 저장 테스트")
    public void createItemTest() {
        FundingItemEntity fundingItem = FundingItemEntity.builder()
                .itemNm("테스트 상품")
                .price(10000)
                .itemDetail("테스트 상품 상세설명")
                .itemSellStatus(ItemSellStatus.SELL)
                .stockNumber(100)
                .build();
        FundingItemEntity savedItem = fundingItemRepository.save(fundingItem);
        System.out.println(savedItem.toString());
    }
}
