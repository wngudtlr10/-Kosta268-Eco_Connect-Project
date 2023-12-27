package com.kosta268.eco_connect.entity.funding;

import com.kosta268.eco_connect.constant.FundingStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;

@Entity
@Table(name="funding")
@Getter
@Setter
@NoArgsConstructor //기본 생성자 생성
@DynamicInsert
@DynamicUpdate
public class FundingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fundingId; //펀딩 코드
    @Column
    private String title; //펀딩명
    @Column
    private String author; //펀딩생성자
    @Column
    private String content; //펀딩내용
    @Column
    private LocalDateTime startAt; //펀딩 시작 시간
    @Column
    private LocalDateTime endAt; // 펀딩 마감 시간
    @Enumerated(EnumType.STRING)
    private FundingStatus fundingStatus;
    @Column
    private int likes; //펀딩 좋아요
    @Column
    private int price; //펀딩 제품 가격
    @Column
    private Long fundingCategoryId; //펀딩 카테고리 코드
    @Column
    private LocalDateTime createAt; //펀딩 생성 시간
    @Column
    private LocalDateTime modifyAt; // 펀딩 수정 시간
    @Column
    private int viewCount; //펀딩 조회수
    @Column
    private int totalCollectedAmount; // 펀딩 총 모금액
    @Column
    private int fundingPeople; //펀딩 인원 수
    @Column
    private int stockCount; //펀딩 상품 재고수
}
