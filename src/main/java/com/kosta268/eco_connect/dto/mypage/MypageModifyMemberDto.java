package com.kosta268.eco_connect.dto.mypage;

import com.kosta268.eco_connect.entity.member.Member;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageModifyMemberDto {
    private Long memberId;
    private String id;
    private String email;
    private String image;
    private String zoneCode;
    private String fullAddress;
    private String subAddress;

    public static MypageModifyMemberDto fromEntity(Member member) {
        return MypageModifyMemberDto.builder()
                .memberId(member.getMemberId())
                .id(member.getId())
                .email(member.getEmail())
                .image(member.getProfile())
                .zoneCode(member.getZoneCode())
                .fullAddress(member.getFullAddress())
                .subAddress(member.getSubAddress())
                .build();
    }
}
