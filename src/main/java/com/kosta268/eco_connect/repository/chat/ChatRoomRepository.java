package com.kosta268.eco_connect.repository.chat;

import com.kosta268.eco_connect.entity.chat.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, String> {
}
