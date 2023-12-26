package com.kosta268.eco_connect.service.member;

import com.kosta268.eco_connect.dto.member.MailResponseDto;
import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.UnsupportedEncodingException;
import java.util.Random;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class MailService {
    private final JavaMailSender javaMailSender;

    public static String createKey() {
        StringBuffer key = new StringBuffer();
        Random random = new Random();

        for (int i = 0 ; i < 8 ; i++) {
            int index = random.nextInt(2); // 0또는 1 랜덤

            switch (index) {
                case 0:
                    key.append((char)((int)(random.nextInt(26)) + 65)); // A-Z
                    break;
                case 1:
                    key.append((random.nextInt(10))); // 0-9
                    break;
            }
        }

        return key.toString();
    }

    public MimeMessage createMessage(String to, String authenticationNumber) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = javaMailSender.createMimeMessage();

        message.addRecipients(Message.RecipientType.TO, to);
        message.setSubject("Econnect 회원가입 인증 메일입니다.");

        String msgg = "";
        msgg += "<div>";
        msgg += "<div>안녕하세요 Econnect 입니다.</div>";
        msgg += "<div>인증 번호는 <strong>" + authenticationNumber +"</strong> 입니다.";
        msgg += "<div>해당 인증번호를 인증번호 확인란에 기입하여 주세요.</div>";

        message.setText(msgg, "utf-8", "html");
        message.setFrom(new InternetAddress("econnect.help@gmail.com", "Econnect"));

        return message;
    }

    public MailResponseDto sendSimpleMessage(String to, HttpSession session) throws Exception {
        String authenticationNumber = createKey();
        session.setMaxInactiveInterval(1800); // 1800초 = 30분
        session.setAttribute("authenticationNumber", authenticationNumber);
        log.info("authenticationNumber session : {}", session.getId());

        MimeMessage message = createMessage(to, authenticationNumber); // 메일 발송
        try {
            javaMailSender.send(message);
        } catch (MailException me) {
            me.printStackTrace();
            throw new IllegalArgumentException();
        }

        return new MailResponseDto(authenticationNumber);
    }
}
