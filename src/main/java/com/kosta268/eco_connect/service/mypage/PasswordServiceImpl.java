package com.kosta268.eco_connect.service.mypage;

import com.kosta268.eco_connect.dto.mypage.PasswordDto;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PasswordServiceImpl implements PasswordService {

  private final MypageService mypageService;
  private final PasswordEncoder passwordEncoder;

  public PasswordServiceImpl(MypageService mypageService, PasswordEncoder passwordEncoder) {
    this.mypageService = mypageService;
    this.passwordEncoder = passwordEncoder;
  }

  @Override
  public boolean verifyPassword(Long memberId, PasswordDto passwordDto) {
    // memberId로부터 저장된 암호화된 비밀번호를 가져옴
        String storedPassword = mypageService.getStoredPassword(memberId);

    // 암호화된 비밀번호가 null이면 검증 실패
    if (storedPassword == null) {
      return false;
    }

    // 입력한 비밀번호를 암호화하여 저장된 비밀번호와 비교
    return passwordEncoder.matches(passwordDto.getPassword(), storedPassword);
  }


}
