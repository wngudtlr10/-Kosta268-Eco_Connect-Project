package com.kosta268.eco_connect.dto.gifticon;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberGifticonDto {

    private Long memberGifticonId;
    private Long memberId;
    private GifticonDto gifticonDto;
    private int quantity;
}
