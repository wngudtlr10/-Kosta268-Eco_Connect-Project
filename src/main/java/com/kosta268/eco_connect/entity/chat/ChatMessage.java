package com.kosta268.eco_connect.entity.chat;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.kosta268.eco_connect.entity.member.Member;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Data
@Entity
@Table(name = "chat_message")
@ToString(exclude = {"chatRoom", "member"})
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatMessageId;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    private String message;

    private Timestamp createAt;

    public ChatMessage(Member member, ChatRoom chatRoom, String message) {
        this.member = member;
        this.chatRoom = chatRoom;
        this.message = message;
    }

    @PrePersist
    public void prePersist() {
        this.createAt = new Timestamp(System.currentTimeMillis());
    }

    public void setMember(Member member) {
        this.member = member;
        member.getChatMessageList().add(this);
    }

    public void setChatRoom(ChatRoom chatRoom) {
        this.chatRoom = chatRoom;
        chatRoom.getChatMessageList().add(this);
    }
}
