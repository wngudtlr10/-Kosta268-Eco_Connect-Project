package com.kosta268.eco_connect.controller.chat;

import com.kosta268.eco_connect.dto.chat.ChatMessageDto;
import com.kosta268.eco_connect.service.chat.ChatMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ChatMessageController {
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final ChatMessageService chatMessageService;

    @MessageMapping("/api/chat-room/{chatRoomId}")
    public void messageAdd(@DestinationVariable("chatRoomId") String chatRoomId,
                           ChatMessageDto chatMessageDto) {
        log.warn("chatMessageDto : {}", chatMessageDto);
        ChatMessageDto returnchatMessageDto = chatMessageService.addChatMessage(chatRoomId, chatMessageDto);

        simpMessagingTemplate.convertAndSend("/sub/api/chat-room/" + chatRoomId, returnchatMessageDto);
    }
}
