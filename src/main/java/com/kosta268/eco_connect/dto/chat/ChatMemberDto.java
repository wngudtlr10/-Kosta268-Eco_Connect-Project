package com.kosta268.eco_connect.dto.chat;

import com.kosta268.eco_connect.entity.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatMemberDto {
    private Long memberId;
    private String id;

    // User -> ChatMemberDto
    public static ChatMemberDto fromEntity(Member member) {
        return ChatMemberDto.builder()
                .memberId(member.getMemberId())
                .id(member.getId())
                .build();
    }
}
