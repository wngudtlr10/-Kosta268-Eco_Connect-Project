package com.kosta268.eco_connect.controller.chat;

import com.kosta268.eco_connect.dto.chat.ChatRoomAddDto;
import com.kosta268.eco_connect.security.CustomUserDetails;
import com.kosta268.eco_connect.service.chat.ChatRoomMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat-room")
public class ChatRoomMemberController {
    private final ChatRoomMemberService chatRoomMemberService;

    @PostMapping("{chatRoomId}/member")
    public ChatRoomAddDto chatRoomAdd(@PathVariable("chatRoomId") String chatRoomId,
                                      @AuthenticationPrincipal CustomUserDetails userDetails) {
        Long memberId = userDetails.getMemberId();
        return chatRoomMemberService.addChatRoomUser(chatRoomId, memberId);
    }

    @DeleteMapping("{chatRoomId}/member")
    public void chatRoomRemove(@PathVariable("chatRoomId") String chatRoomId,
                               @AuthenticationPrincipal CustomUserDetails userDetails) {
        Long memberId = userDetails.getMemberId();
        chatRoomMemberService.removeChatRoomUser(chatRoomId, memberId);
    }
}
