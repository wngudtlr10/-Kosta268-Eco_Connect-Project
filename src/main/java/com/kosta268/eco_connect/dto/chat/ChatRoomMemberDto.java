package com.kosta268.eco_connect.dto.chat;

import com.kosta268.eco_connect.entity.chat.ChatRoomMember;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
public class ChatRoomMemberDto {
    private ChatMemberDto member;

    public static ChatRoomMemberDto fromEntity(ChatRoomMember chatRoomMember) {
        return ChatRoomMemberDto.builder()
                .member(ChatMemberDto.fromEntity(chatRoomMember.getMember()))
                .build();
    }

    public static List<ChatRoomMemberDto> fromEntity(List<ChatRoomMember> chatRoomUserList) {
        return chatRoomUserList.stream()
                .map(ChatRoomMemberDto::fromEntity)
                .collect(Collectors.toList());
    }
}
