package com.kosta268.eco_connect.entity.funding;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="funding_image")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class FundingImageEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; //펀딩 이미지 아이디
    @Column
    private String image_url; //image 경로
    @Column
    private Long member_funding_id; //회원의 펀딩 아이디
    @Column
    private String oriImgName;
    @Column
    private String repImgYn;

}
