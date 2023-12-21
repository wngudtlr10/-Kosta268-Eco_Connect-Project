package com.kosta268.eco_connect.dto.funding;

import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;


@Data
@Table(name = "funding")
public class FundingDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long funding_id;
    @Column
    private String title;
    @Column
    private String content;
    @Column
    private LocalDateTime startAt;
    @Column
    private LocalDateTime endAt;
    @Column
    private int likes;
//    private enum status {true("success"), false("false")};
    @Column
    private Long funding_category_id;
    @Column
    private LocalDateTime createAt;
    @Column
    private LocalDateTime modifyAt;
    @Column
    private int collecting;
}
