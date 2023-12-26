package com.kosta268.eco_connect.dto.funding;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.kosta268.eco_connect.constant.Status;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;


@Data
@Table(name = "funding")
@JsonIgnoreProperties(ignoreUnknown = true) //JSON 변환 중 알려지지 않은 속성 무시
public class FundingDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String title;
    @Column
    private String Author;
    @Column
    private String content;
    @Column
    private LocalDateTime startAt;
    @Column
    private LocalDateTime endAt;
    @Column
    private int likes;
    @Column
    private Status status;
    @Column
    private Long category_id;
    @Column
    private LocalDateTime createAt;
    @Column
    private LocalDateTime modifyAt;
    @Column
    private int total_collected_amount;
    @Column
    private int view_count;
    @Column
    private int price;
}

