package com.kosta268.eco_connect.controller.mypage;

import com.kosta268.eco_connect.dto.mypage.PasswordDto;
import com.kosta268.eco_connect.service.mypage.PasswordService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping(value="/api/password")
@RequiredArgsConstructor
@Slf4j
public class PasswordController {

  private final PasswordService passwordService;

  @PostMapping(value ="/{memberId}", consumes = "application/json", params = "_method=patch")
  public ResponseEntity<String> verifyPassword(@PathVariable Long memberId, @RequestBody PasswordDto passwordDto) {
    boolean isPasswordCorrect = passwordService.verifyPassword(memberId, passwordDto);

    if (isPasswordCorrect) {
      // 비밀번호가 일치하면 "success" 반환
      return ResponseEntity.ok("success");
    } else {
      // 비밀번호가 일치하지 않으면 401 Unauthorized 반환
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("failure");
    }
  }

  // 새로운 POST 메소드 추가
  @PostMapping(value = "/{memberId}", consumes = "application/json", params = "_method=patch")
  public ResponseEntity<String> verifyPasswordPost(@PathVariable Long memberId, @RequestBody PasswordDto passwordDto) {
    boolean isPasswordCorrect = passwordService.verifyPassword(memberId, passwordDto);

    if (isPasswordCorrect) {
      // 비밀번호가 일치하면 "success" 반환
      return ResponseEntity.ok("success");
    } else {
      //// 비밀번호가 일치하지 않으면 401 Unauthorized 반환
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("failure");
    }
  }

}
