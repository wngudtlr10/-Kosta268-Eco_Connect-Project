package com.kosta268.eco_connect.dto.mypage;

import com.kosta268.eco_connect.entity.member.Member;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageModifyAddressDto {
//    private Long memberId;
    private String zoneCode;
    private String fullAddress;
    private String subAddress;

    public static MypageModifyAddressDto fromEntity(Member member) {
        return MypageModifyAddressDto.builder()
//                .memberId(member.getMemberId())
                .zoneCode(member.getZoneCode())
                .fullAddress(member.getFullAddress())
                .subAddress(member.getSubAddress())
                .build();
    }
}
