package com.kosta268.eco_connect.dto.gifticon;

import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GifticonDetailDto {
    private Long gifticonId;

    private String name;

    private int price;

    private String barcode;

    private int remains;

    private String image;

    public static GifticonDetailDto fromEntity(Gifticon gifticon) {
        return GifticonDetailDto.builder()
                .gifticonId(gifticon.getGifticonId())
                .name(gifticon.getName())
                .price(gifticon.getPrice())
                .barcode(gifticon.getBarcode())
                .remains(gifticon.getRemains())
                .image(gifticon.getImage())
                .build();

    }
}
