package com.kosta268.eco_connect.service.mypage;

import com.kosta268.eco_connect.dto.mypage.PasswordDto;

public interface PasswordService {

  boolean verifyPassword(Long memberId, PasswordDto passwordDto);

}
