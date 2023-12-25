package com.kosta268.eco_connect.dto.chat;

import com.kosta268.eco_connect.entity.chat.ChatRoom;
import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Builder
public class ChatRoomListDto {
    private String chatRoomId;
    private String title;
    private Long memberCount;
    private String recentMessage;
    private Timestamp recentMessageCreateAt;

    public static ChatRoomListDto fromEntity(ChatRoom chatRoom) {
        return ChatRoomListDto.builder()
                .chatRoomId(chatRoom.getChatRoomId())
                .title(chatRoom.getTitle())
                .memberCount(chatRoom.getMemberCount())
                .recentMessage(chatRoom.getRecentMessage())
                .recentMessageCreateAt(chatRoom.getRecentMessageCreateAt())
                .build();
    }
}
