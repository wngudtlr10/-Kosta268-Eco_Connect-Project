package com.kosta268.eco_connect.dto.funding;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class FundingParticipationDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long fundingCommentId; //펀딩 참여 코드
    @Column
    private Long fundingId; //펀딩 아이디(외래키)
    @Column
    private Long memberId; // 멤버 아이디(외래키)

}
