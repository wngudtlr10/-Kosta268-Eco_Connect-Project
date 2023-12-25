package com.kosta268.eco_connect.dto.chat;

import com.kosta268.eco_connect.entity.chat.ChatMessage;
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
public class ChatMessageDto {
    private ChatMemberDto member;
//    private ChatRoomDto chatRoom;
    private String message;
    private Timestamp createAt;

    public static ChatMessageDto fromEntity(ChatMessage chatMessage) {
        return ChatMessageDto.builder()
                .member(ChatMemberDto.fromEntity(chatMessage.getMember()))
//                .chatRoom(ChatRoomDto.fromEntity(chatMessage.getChatRoom()))
                .message(chatMessage.getMessage())
                .createAt(chatMessage.getCreateAt())
                .build();
    }

    public static List<ChatMessageDto> fromEntity(List<ChatMessage> chatMessageList) {
        return chatMessageList.stream()
                .map(ChatMessageDto::fromEntity)
                .collect(Collectors.toList());
    }
}
