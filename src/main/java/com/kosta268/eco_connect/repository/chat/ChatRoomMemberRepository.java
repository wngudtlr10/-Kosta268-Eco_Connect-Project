package com.kosta268.eco_connect.repository.chat;

import com.kosta268.eco_connect.entity.chat.ChatRoomMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ChatRoomMemberRepository extends JpaRepository<ChatRoomMember, Long> {
    long countByChatRoom_ChatRoomId(String chatRoomId);
    List<ChatRoomMember> findChatRoomByMember_MemberId(Long memberId);
    ChatRoomMember findByMember_memberIdAndChatRoom_ChatRoomId(Long memberId, String chatRoomId);

    List<ChatRoomMember> findMemberByChatRoom_ChatRoomId(String chatRoomId);
}
