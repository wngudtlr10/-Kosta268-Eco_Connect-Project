package com.kosta268.eco_connect.entity.funding;

import com.kosta268.eco_connect.constant.ItemSellStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name="fundingItem")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class FundingItemEntity {

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

    @Builder
    public FundingItemEntity(String itemNm, int price, int stockNumber, String itemDetail, ItemSellStatus itemSellStatus) {
        this.fundingItemNm = itemNm;
        this.price = price;
        this.stockNumber =stockNumber;
        this.fundingItemDetail = itemDetail;
        this.itemSellStatus = itemSellStatus;
    }
}
