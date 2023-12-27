package com.kosta268.eco_connect.controller.gifticon;

import com.kosta268.eco_connect.dto.gifticon.GifticonDto;
import com.kosta268.eco_connect.dto.gifticon.MemberGifticonDto;
import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import com.kosta268.eco_connect.entity.gifticon.MemberGifticon;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.security.CustomUserDetails;
import com.kosta268.eco_connect.service.gifticon.GifticonService;
import com.kosta268.eco_connect.service.gifticon.MemberGifticonService;
import com.kosta268.eco_connect.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api")
public class MemberGifticonController {

    private final MemberGifticonService memberGifticonService;
    private final GifticonService gifticonService;
    private final MemberService memberService;

    @PostMapping("/member/gifticon/{gifticonId}")
    public MemberGifticonDto buyGifticon(@AuthenticationPrincipal CustomUserDetails userDetails, @PathVariable Long gifticonId, @RequestParam int quantity) {
        Gifticon gifticon = gifticonService.findById(gifticonId);
        MemberGifticon boughtGifticon = memberGifticonService.buyGifticon(userDetails.getMemberId(), gifticonId, quantity);
        GifticonDto gifticonDto = new GifticonDto(gifticon.getGifticonId(), gifticon.getName(), gifticon.getBarcode());
        return new MemberGifticonDto(boughtGifticon.getMemberGifticonId(), userDetails.getMemberId(), gifticonDto, quantity);
    }

    @GetMapping("/member/gifticons")
    public List<MemberGifticonDto> boughtGifticonList(@AuthenticationPrincipal CustomUserDetails userDetails) {
        Member member = memberService.getMemberById(userDetails.getMemberId());
        List<MemberGifticon> boughtGifticons = memberGifticonService.getBoughtGifticons(member);
        return boughtGifticons.stream()
                .map(boughtGifticon -> {
                    GifticonDto gifticonDto = new GifticonDto(boughtGifticon.getGifticon().getGifticonId(), boughtGifticon.getGifticon().getName(), boughtGifticon.getGifticon().getBarcode());
                    return new MemberGifticonDto(boughtGifticon.getMemberGifticonId(), userDetails.getMemberId(), gifticonDto, boughtGifticon.getQuantity());
                }).collect(Collectors.toList());
    }

}
