package com.kosta268.eco_connect.dto.gifticon;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GifticonDto {
    private Long gifticonId;
    private String name;
    private String barcode;
}
