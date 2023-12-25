package com.kosta268.eco_connect.dto.funding;

import jakarta.persistence.*;
import lombok.*;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class FundingImageDto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; //펀딩 이미지 아이디
    private String imgName;
    private String imgUrl; //image 경로
    private Long member_funding_id; //회원의 펀딩 아이디
}
