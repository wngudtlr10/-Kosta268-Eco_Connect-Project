package com.kosta268.eco_connect.dto.mypage;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class MyinfoUpdateDto {

  private Long memberId;
  private String profile;
  private String phone;
  private String password;

}
