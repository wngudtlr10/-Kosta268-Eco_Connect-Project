package com.kosta268.eco_connect.dto.gifticon;

import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class GifticonUpdateDto {
    private String name;
    private int price;
    private int remains;
    private MultipartFile image;
    private MultipartFile barcode;

    public void updateGifticon(Gifticon gifticon) {
        gifticon.setName(name);
        gifticon.setPrice(price);
        gifticon.setRemains(remains);

    }
}
