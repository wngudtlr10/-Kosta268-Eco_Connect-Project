package com.kosta268.eco_connect.dto.gifticon;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
