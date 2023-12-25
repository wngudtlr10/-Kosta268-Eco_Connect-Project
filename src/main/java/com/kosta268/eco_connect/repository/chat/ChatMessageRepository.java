package com.kosta268.eco_connect.repository.chat;

import com.kosta268.eco_connect.entity.chat.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
}
