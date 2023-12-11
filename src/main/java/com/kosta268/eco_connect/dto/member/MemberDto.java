package com.kosta268.eco_connect.dto.member;

import lombok.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
public class MemberDto {

    private Long member_id;
    private String id;
    private String name;
    private String email;
    private String profile;
    private String address;
    private LocalDateTime created_in;

}
