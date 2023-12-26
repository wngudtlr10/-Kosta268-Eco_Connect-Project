package com.kosta268.eco_connect.dto.funding;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.kosta268.eco_connect.constant.ItemSellStatus;
import jakarta.persistence.*;
import lombok.*;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class FundingItemDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long fundingItemId; //펀딩 상품 코드
    @Column
    private String fundingTitle; //펀딩명

    @Column(nullable = false, length = 50)
    private String fundingItemNm; //상품명

    @Column(name = "price", nullable = false)
    private int price;  //가격

    @Column(nullable = false)
    private int stockNumber;  //재고수량

    @Lob
    @Column(nullable = false)
    private String fundingItemDetail;  //상품 상세설명

    @Enumerated(EnumType.STRING)
    private ItemSellStatus itemSellStatus;  //상품 판매 상태
}
