package com.kosta268.eco_connect.entity.gifticon;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Gifticon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gifticonId;

    private String name;

    private int price;

    private String barcode;

    private int remains;

    private String image;

}
