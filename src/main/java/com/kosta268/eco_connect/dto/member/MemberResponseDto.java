package com.kosta268.eco_connect.dto.member;

import com.kosta268.eco_connect.entity.member.Member;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MemberResponseDto {
    private String id;

    public static MemberResponseDto fromEntity(Member member) {
        return MemberResponseDto.builder()
                .id(member.getId())
                .build();
    }
}
