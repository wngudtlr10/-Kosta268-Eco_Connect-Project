package com.kosta268.eco_connect.entity.funding;

//import com.kosta268.eco_connect.constant.ItemSellStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Entity
@Table(name="funding")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Funding {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; //펀딩 코드

    private String title; //펀딩명
    private String autour;

    private String content; //펀딩내용

    private LocalDateTime startAt; //펀딩 시작 시간

    private LocalDateTime endAt; // 펀딩 마감 시간

//    private ItemSellStatus itemSellStatus;


    private int likes; //펀딩 좋아요


    private Long categoryId; //펀딩 카테고리 코드


    private LocalDateTime createAt; //펀딩 생성 시간

    private LocalDateTime modifyAt; // 펀딩 수정 시간

    private int collecting; // 펀딩 총 모금액
}
