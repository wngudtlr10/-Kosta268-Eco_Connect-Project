package com.kosta268.eco_connect.service.gifticon;

import com.kosta268.eco_connect.dto.gifticon.MemberGifticonDto;
import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import com.kosta268.eco_connect.entity.gifticon.MemberGifticon;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.repository.gifticon.GifticonRepository;
import com.kosta268.eco_connect.repository.gifticon.MemberGifticonRepository;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class MemberGifticonService {

    private final MemberGifticonRepository memberGifticonRepository;
    private final GifticonRepository gifticonRepository;
    private final MemberRepository memberRepository;

    public MemberGifticon buyGifticon(Long memberId, Long gifticonId, int quantity) {
        Gifticon gifticon = gifticonRepository.findById(gifticonId).orElseThrow(() -> new IllegalArgumentException("no such gifticon"));
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException("no such member"));

        int requiredPoints = gifticon.getPrice() * quantity;

        if (member.getPoint().getHolding() < requiredPoints) {
            throw new IllegalArgumentException("not enough points");
        }

        if (gifticon.getRemains() == 0) {
            throw new IllegalArgumentException("not enough stock");
        }

        member.getPoint().setHolding(member.getPoint().getHolding() - requiredPoints);
        gifticon.setRemains(gifticon.getRemains() - 1);
        Optional<MemberGifticon> existingMemberGificon = memberGifticonRepository.findByMemberAndGifticon(member, gifticon);

        MemberGifticon memberGifticon;
        if (existingMemberGificon.isPresent()) {
            memberGifticon = existingMemberGificon.get();
            memberGifticon.setQuantity(memberGifticon.getQuantity() + quantity);
        } else {
            memberGifticon = new MemberGifticon();
            memberGifticon.setMember(member);
            memberGifticon.setGifticon(gifticon);
            memberGifticon.setPurchaseDate(LocalDateTime.now());
            memberGifticon.setQuantity(quantity);
        }

        return memberGifticonRepository.save(memberGifticon);
    }
    @Transactional(readOnly = true)
    public List<MemberGifticon> getBoughtGifticons(Member member) {
        return memberGifticonRepository.findByMember(member);
    }
}
