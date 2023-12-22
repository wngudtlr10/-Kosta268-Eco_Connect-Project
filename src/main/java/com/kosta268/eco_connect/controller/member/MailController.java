package com.kosta268.eco_connect.controller.member;

import com.kosta268.eco_connect.dto.member.MailRequestDto;
import com.kosta268.eco_connect.dto.member.MailResponseDto;
import com.kosta268.eco_connect.service.member.MailService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("api/mail")
public class MailController {
    private final MailService mailService;

    @PostMapping("/mail-send")
    public ResponseEntity<MailResponseDto> mailSend(@RequestBody MailRequestDto mailRequestDto,
                                                    HttpSession session) throws Exception {
        MailResponseDto mailResponseDto = mailService.sendSimpleMessage(mailRequestDto.getEmail(), session);
        log.info("authenticationNumber : {}", mailResponseDto.getAuthenticationNumber());

        return ResponseEntity.ok(mailResponseDto);
    }

    @PostMapping("/mail-confirm")
    public boolean mailConfirm(@RequestBody Map<String, String> codeMap,
                               HttpSession session) {
        String sessionAuthenticationNumber = (String)session.getAttribute("authenticationNumber");
        log.info("confirm authenticationNumber session : {}", session.getId());
        log.info("confirm authenticationNumber : {}", sessionAuthenticationNumber);
        return sessionAuthenticationNumber.equals(codeMap.get("code"));
    }
}
