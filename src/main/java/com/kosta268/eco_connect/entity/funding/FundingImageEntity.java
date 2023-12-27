package com.kosta268.eco_connect.entity.funding;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.access.prepost.PreInvocationAuthorizationAdviceVoter;

@Entity
@Table(name="funding_image")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class FundingImageEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    private FundingEntity funding;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long fundingImageId; //펀딩 이미지 아이디
    @Column
    private String image_url; //image 경로
    @Column
    private Long member_funding_id; //회원의 펀딩 아이디
    @Column
    private String oriImgName;
    @Column
    private String repImgYn;
    @Column
    private String fundingFileName;

}
