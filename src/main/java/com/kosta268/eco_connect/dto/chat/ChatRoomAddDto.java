package com.kosta268.eco_connect.dto.chat;

import com.kosta268.eco_connect.entity.chat.ChatRoom;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoomAddDto {
    private String chatRoomId;
    private String title;
    private Long userCount;

    public static ChatRoomAddDto fromEntity(ChatRoom chatRoom) {
        return ChatRoomAddDto.builder()
                .chatRoomId(chatRoom.getChatRoomId())
                .title(chatRoom.getTitle())
                .userCount(chatRoom.getMemberCount())
                .build();
    }
}
