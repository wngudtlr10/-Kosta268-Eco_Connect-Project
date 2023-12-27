package com.kosta268.eco_connect.repository.funding;

import com.kosta268.eco_connect.constant.Status;
import com.kosta268.eco_connect.entity.funding.FundingEntity;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDateTime;


@SpringBootTest
@TestPropertySource(locations="classpath:application-test.properties")
public class FundingEntityRepositoryTest {

    @Autowired
    FundingRepository fundingRepository;

    @Test
    @DisplayName("펀딩글 작성 테스트")
    public void createFundingTest(){
        LocalDateTime currentTime = LocalDateTime.now();
        FundingEntity funding = new FundingEntity(null, "생수 테스트 판매글", "테스터", "테스트 펀딩 상세 설명", currentTime, currentTime.plusDays(2), Status.COLLECTING, 0, 10000, null, currentTime, null, 0, 1000000000);
        FundingEntity savedItem = fundingRepository.save(funding);
        System.out.println(savedItem.toString());
    }
}