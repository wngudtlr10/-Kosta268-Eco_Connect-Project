package com.kosta268.eco_connect.entity.chat;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "chat_room")
@ToString(exclude = {"chatRoomMemberList", "chatMessageList"})
@DynamicInsert
public class ChatRoom {
    @Id
    private String chatRoomId;

    private String title;

    @ColumnDefault("1")
    private Long memberCount;

    private String recentMessage;
    private Timestamp recentMessageCreateAt;

    @JsonManagedReference
    @OneToMany(mappedBy = "chatRoom", fetch = FetchType.LAZY)
    private List<ChatMessage> chatMessageList = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "chatRoom", fetch = FetchType.LAZY)
    private List<ChatRoomMember> chatRoomMemberList = new ArrayList<>();

    private Timestamp createAt;

    @PrePersist
    public void prePersist() {
        this.createAt = new Timestamp(System.currentTimeMillis());
    }

    public static ChatRoom create(String title) {
        ChatRoom chatRoom = new ChatRoom();
        chatRoom.setChatRoomId(UUID.randomUUID().toString());
        chatRoom.setTitle(title);

        return chatRoom;
    }

    public void addChatMessageList(ChatMessage chatMessage) {
        chatMessageList.add(chatMessage);
        chatMessage.setChatRoom(this);
    }

    public void addChatRoomUserList(ChatRoomMember chatRoomMember) {
        chatRoomMemberList.add(chatRoomMember);
        chatRoomMember.setChatRoom(this);
    }
}
