package com.kosta268.eco_connect.dto.chat;

import com.kosta268.eco_connect.entity.chat.ChatRoom;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoomDto {
    private String chatRoomId;
    private String title;
    private Long userCount;
    private String recentMessage;
    private Timestamp recentMessageCreateAt;
    private List<ChatMessageDto> chatMessageList;
    private List<ChatRoomMemberDto> chatRoomMemberList;

    public static ChatRoomDto fromEntity(ChatRoom chatRoom) {
        return ChatRoomDto.builder()
                .chatRoomId(chatRoom.getChatRoomId())
                .title(chatRoom.getTitle())
                .userCount(chatRoom.getMemberCount())
                .recentMessage(chatRoom.getRecentMessage())
                .recentMessageCreateAt(chatRoom.getRecentMessageCreateAt())
                .chatMessageList(chatRoom.getChatMessageList().stream()
                        .map(ChatMessageDto::fromEntity)
                        .collect(Collectors.toList()))
                .chatRoomMemberList(chatRoom.getChatRoomMemberList().stream()
                        .map(ChatRoomMemberDto::fromEntity)
                        .collect(Collectors.toList()))
                .build();
    }
}
