package com.kosta268.eco_connect.dto.mypage;

import com.kosta268.eco_connect.entity.member.Member;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageMemberDto {
    private Long memberId;
    private String id;
    private int holdingPoint;
    private int totalPoint;
    private String image;

    public static MypageMemberDto fromEntity(Member member) {
        return MypageMemberDto.builder()
                .memberId(member.getMemberId())
                .id(member.getId())
                .holdingPoint(member.getPoint().getHolding())
                .totalPoint(member.getPoint().getTotal())
                .image(member.getProfile())
                .build();
    }
}
