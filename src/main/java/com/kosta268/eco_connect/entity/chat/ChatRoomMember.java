package com.kosta268.eco_connect.entity.chat;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.kosta268.eco_connect.entity.member.Member;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

@Data
@Entity
@Table(name = "chat_room_member")
@ToString(exclude = {"member", "chatRoom"})
public class ChatRoomMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatRoomMemberId;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    public void initChatParticipation(Member member, ChatRoom chatRoom) {
        this.member = member;
        this.chatRoom = chatRoom;
    }

    public void setMember(Member member) {
        if (this.member != member) {
            this.member = member;
            member.getChatRoomMemberList().add(this);
        }
    }

    public void setChatRoom(ChatRoom chatRoom) {
        if (this.chatRoom != chatRoom) {
            this.chatRoom = chatRoom;
            chatRoom.getChatRoomMemberList().add(this);
        }
    }
}
