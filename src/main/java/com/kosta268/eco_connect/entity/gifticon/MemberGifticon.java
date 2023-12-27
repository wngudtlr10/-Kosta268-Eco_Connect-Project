package com.kosta268.eco_connect.entity.gifticon;

import com.kosta268.eco_connect.entity.member.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class MemberGifticon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberGifticonId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gifticon_id")
    private Gifticon gifticon;

    private int quantity; // 구매 수량


    private LocalDateTime purchaseDate; // 구매 일자

}
