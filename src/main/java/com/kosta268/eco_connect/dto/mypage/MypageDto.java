package com.kosta268.eco_connect.dto.mypage;

import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.entity.member.Role;
import com.kosta268.eco_connect.entity.point.Point;
import com.kosta268.eco_connect.entity.mypage.Grade;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;


import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class MypageDto {

  private Long memberId;
  private String id;
  private String password;
//  private String name;
  private String email;
  private String address;
  private Role role;
  private String profile;
  private LocalDateTime createdIn;
  private String phone;
  private Long gradeId;
  private int holding;

  // 생성자 추가
  public MypageDto(Member member, Point point, Grade grade) {
    this.memberId = member.getMemberId();
    this.id = member.getId();
    this.password = member.getPassword();
//    this.name = member.getName();
    this.email = member.getEmail();
    this.address = member.getAddress();
    this.role = member.getRole();
    this.profile = member.getProfile();
    this.createdIn = member.getCreatedIn();
    this.phone = member.getPhone();
    this.gradeId = grade.getGradeId();
    this.holding = point.getHolding();
  }

}
