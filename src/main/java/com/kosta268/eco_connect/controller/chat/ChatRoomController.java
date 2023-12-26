package com.kosta268.eco_connect.controller.chat;

import com.kosta268.eco_connect.dto.chat.ChatRoomDto;
import com.kosta268.eco_connect.dto.chat.ChatRoomListDto;
import com.kosta268.eco_connect.security.CustomUserDetails;
import com.kosta268.eco_connect.service.chat.ChatRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat-room")
public class ChatRoomController {
    private final ChatRoomService chatRoomService;

    @PostMapping("/title/{title}")
    public ChatRoomListDto chatRoomAdd(@PathVariable("title") String title,
                                       @AuthenticationPrincipal CustomUserDetails userDetails) {
        Long memberId = userDetails.getMemberId();
        return chatRoomService.addChatRoom(memberId, title);
    }

    @GetMapping("/member")
    public List<ChatRoomListDto> chatRoomList(@AuthenticationPrincipal CustomUserDetails userDetails) {
        Long memberId = userDetails.getMemberId();
        return chatRoomService.findUserChatRoom(memberId);
    }

    @GetMapping("/{chatRoomId}")
    public ChatRoomDto chatRoomDetails(@PathVariable("chatRoomId") String chatRoomId) {
        return chatRoomService.findChatRoom(chatRoomId);
    }
}
