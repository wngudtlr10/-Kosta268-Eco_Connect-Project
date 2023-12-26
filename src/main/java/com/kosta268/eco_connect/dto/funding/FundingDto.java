package com.kosta268.eco_connect.dto.funding;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.kosta268.eco_connect.constant.FundingStatus;
import com.kosta268.eco_connect.constant.ItemSellStatus;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;


@Data
@Table(name = "funding")
@JsonIgnoreProperties(ignoreUnknown = true) //JSON 변환 중 알려지지 않은 속성 무시
public class FundingDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long fundingId;
    @Column
    private String title;
    @Column
    private String author;
    @Column
    private String content;
    @Column
    @CreationTimestamp
    private LocalDateTime startAt;
    @Column
    private LocalDateTime endAt;
    @Column
    private int likes;
    @Enumerated(EnumType.STRING)
    private FundingStatus fundingStatus;
    @Column
    private Long fundingCategoryId;
    @Column
    @CreationTimestamp
    private LocalDateTime createAt;
    @Column
    @UpdateTimestamp
    private LocalDateTime modifyAt;
    @Column
    private int totalCollectedAmount;
    @Column
    private int viewCount;
    @Column
    private int price;
    @Column
    private int fundingPeople;
    @Column
    private int collecting;
}

