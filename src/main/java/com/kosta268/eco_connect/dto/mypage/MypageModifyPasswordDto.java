package com.kosta268.eco_connect.dto.mypage;

import com.kosta268.eco_connect.entity.member.Member;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageModifyPasswordDto {
//    private Long memberId;
    private String currentPassword;
    private String newPassword;
}
