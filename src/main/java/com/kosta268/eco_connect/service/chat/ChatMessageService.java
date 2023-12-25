package com.kosta268.eco_connect.service.chat;

import com.kosta268.eco_connect.dto.chat.ChatMessageDto;
import com.kosta268.eco_connect.entity.chat.ChatMessage;
import com.kosta268.eco_connect.entity.chat.ChatRoom;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.repository.chat.ChatMessageRepository;
import com.kosta268.eco_connect.repository.chat.ChatRoomRepository;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class ChatMessageService {
    private final MemberRepository memberRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepository chatMessageRepository;

    public ChatMessageDto addChatMessage(String chatRoomId, ChatMessageDto chatMessageDto) {
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(() -> new NoSuchElementException("ChatRoom Not Found."));
        Member member = memberRepository.findById(chatMessageDto.getMember().getMemberId()).orElseThrow(() -> new NoSuchElementException("Member Not Found."));

        ChatMessage chatMessage = ChatMessage.builder()
                .member(member)
                .chatRoom(chatRoom)
                .message(chatMessageDto.getMessage())
                .build();

        log.info("addChatMessage : chatMessageDto : " + chatMessage);

        ChatMessage saveChatMessage = chatMessageRepository.save(chatMessage);

        chatRoom.setRecentMessage(saveChatMessage.getMessage());
        chatRoom.setRecentMessageCreateAt(saveChatMessage.getCreateAt());

        chatRoomRepository.save(chatRoom);

        return ChatMessageDto.fromEntity(saveChatMessage);
    }
}
