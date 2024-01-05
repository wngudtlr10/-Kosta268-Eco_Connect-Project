package com.kosta268.eco_connect.dto.gifticon;

import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class GifticonCreateDto {

    private String name;
    private int price;
    private int remains;
    private MultipartFile barcode;
    private MultipartFile image;

    public Gifticon toEntity() {
        return Gifticon.builder()
                .name(name)
                .price(price)
                .remains(remains)
                .barcode(barcode.getOriginalFilename())
                .image(image.getOriginalFilename())
                .build();
    }

}
