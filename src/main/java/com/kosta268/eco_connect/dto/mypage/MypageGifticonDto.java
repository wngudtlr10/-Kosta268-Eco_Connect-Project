package com.kosta268.eco_connect.dto.mypage;

import com.kosta268.eco_connect.entity.gifticon.MemberGifticon;
import lombok.*;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageGifticonDto {
    private Long memberGifticonId;
    private Long memberId;
    private String image;
    private String name;
    private String barcode;

    public static MypageGifticonDto fromEntity(MemberGifticon memberGifticon) {
        return MypageGifticonDto.builder()
                .memberGifticonId(memberGifticon.getMemberGifticonId())
                .memberId(memberGifticon.getMember().getMemberId())
                .image(memberGifticon.getGifticon().getImage())
                .name(memberGifticon.getGifticon().getName())
                .barcode(memberGifticon.getGifticon().getBarcode())
                .build();
    }
}
