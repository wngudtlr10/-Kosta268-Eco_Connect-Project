package com.kosta268.eco_connect.service.chat;

import com.kosta268.eco_connect.dto.chat.ChatRoomAddDto;
import com.kosta268.eco_connect.entity.chat.ChatRoom;
import com.kosta268.eco_connect.entity.chat.ChatRoomMember;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.repository.chat.ChatRoomMemberRepository;
import com.kosta268.eco_connect.repository.chat.ChatRoomRepository;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
@Transactional
public class ChatRoomMemberService {
    private final ChatRoomMemberRepository chatRoomMemberRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final MemberRepository memberRepository;

    public ChatRoomAddDto addChatRoomUser(String chatRoomId, Long memberId) {
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(() -> new NoSuchElementException("ChatRoom Not Found."));
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new NoSuchElementException("Member Not Found."));

        ChatRoomMember chatRoomMember = new ChatRoomMember();
        chatRoomMember.initChatParticipation(member, chatRoom);
        chatRoom.addChatRoomUserList(chatRoomMember);

        chatRoomMemberRepository.save(chatRoomMember);

        long memberCount = chatRoomMemberRepository.countByChatRoom_ChatRoomId(chatRoomId);
        chatRoom.setMemberCount(memberCount);

        chatRoomRepository.save(chatRoom);

        return ChatRoomAddDto.fromEntity(chatRoom);
    }

    public void removeChatRoomUser(String chatRoomId, Long memberId) {
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(() -> new NoSuchElementException("ChatRoom Not Found."));

        ChatRoomMember findChatRoomUser = chatRoomMemberRepository.findByMember_memberIdAndChatRoom_ChatRoomId(memberId, chatRoomId);

        chatRoomMemberRepository.deleteById(findChatRoomUser.getChatRoomMemberId());

        long memberCount = chatRoomMemberRepository.countByChatRoom_ChatRoomId(chatRoomId);
        if (memberCount != 0) {
            chatRoom.setMemberCount(memberCount);
            chatRoomRepository.save(chatRoom);
        } else {
            chatRoomRepository.deleteById(chatRoom.getChatRoomId());
        }
    }
}
