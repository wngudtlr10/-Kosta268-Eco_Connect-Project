package com.kosta268.eco_connect.dto.funding;


import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;


@Data
@RequiredArgsConstructor
public class FundingDto {

    private Long funding_id;
    private String title;
    private String content;
    private LocalDateTime startAt;
    private LocalDateTime endAt;
    private int likes;
//    private enum status {true("success"), false("false")};
    private Long funding_category_id;
    private LocalDateTime createAt;
    private LocalDateTime modifyAt;
    private int collecting;
}
