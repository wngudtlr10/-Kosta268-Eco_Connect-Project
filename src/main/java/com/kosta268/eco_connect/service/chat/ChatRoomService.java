package com.kosta268.eco_connect.service.chat;

import com.kosta268.eco_connect.dto.chat.ChatRoomDto;
import com.kosta268.eco_connect.dto.chat.ChatRoomListDto;
import com.kosta268.eco_connect.entity.chat.ChatRoom;
import com.kosta268.eco_connect.entity.chat.ChatRoomMember;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.repository.chat.ChatRoomMemberRepository;
import com.kosta268.eco_connect.repository.chat.ChatRoomRepository;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ChatRoomService {
    private final ChatRoomRepository chatRoomRepository;
    private final ChatRoomMemberRepository chatRoomMemberRepository;
    private final MemberRepository memberRepository;

    public ChatRoomListDto addChatRoom(Long memberId, String title) {
        // 채팅방 생성
        ChatRoom newChatRoom = ChatRoom.create(title);
        // 유저 정보 조회
        Member addChatRoomMember = memberRepository.findById(memberId).orElseThrow(() -> new NoSuchElementException("Member Not Found."));

        // 채팅방 유저에 추가할 정보 생성
        ChatRoomMember newChatRoomMember = new ChatRoomMember();
        newChatRoomMember.setMember(addChatRoomMember);
        newChatRoomMember.setChatRoom(newChatRoom);

        // 생성된 채팅방에 채팅방 유저 정보 추가
        newChatRoom.addChatRoomUserList(newChatRoomMember);
        // 유저에 채팅방 유저 정보 추가
        addChatRoomMember.addChatRoomUserList(newChatRoomMember);

        // db에 저장
        chatRoomRepository.save(newChatRoom);
        chatRoomMemberRepository.save(newChatRoomMember);

        // dto로 변환하고 반환
        return ChatRoomListDto.fromEntity(newChatRoom);
    }

    public List<ChatRoomListDto> findUserChatRoom(Long memberId) {
        List<ChatRoomMember> chatRoomMemberList = chatRoomMemberRepository.findChatRoomByMember_MemberId(memberId);

        return chatRoomMemberList.stream()
                .map(chatRoomMember -> ChatRoomListDto.fromEntity(chatRoomMember.getChatRoom()))
                .collect(Collectors.toList());
    }

    public ChatRoomDto findChatRoom(String chatRoomId) {
        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(() -> new NoSuchElementException("ChatRoom Not Found."));;

        return ChatRoomDto.fromEntity(chatRoom);
    }
}
