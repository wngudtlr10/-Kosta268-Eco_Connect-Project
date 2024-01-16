package com.kosta268.eco_connect.controller.mypage;

import com.kosta268.eco_connect.dto.mypage.MypageGifticonDto;
import com.kosta268.eco_connect.security.CustomUserDetails;
import com.kosta268.eco_connect.service.mypage.MypageGifticonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/mypage")
public class MypageGifticonController {
    private final MypageGifticonService mypageGifticonService;

    @GetMapping("/have-gifticon")
    public Page<MypageGifticonDto> mypageHaveGifticonList(@AuthenticationPrincipal CustomUserDetails userDetails,
                                                         @PageableDefault(size = 8) Pageable pageable) {
        Long memberId = userDetails.getMemberId();
        log.warn("memberid : {}", memberId);

        return mypageGifticonService.findMyGifticon(memberId, pageable);
    }

    @DeleteMapping("/have-gifticon/memberGifticonId/{memberGifticonId}/memberId/{memberId}")
    public void deleteMyGifticon(@PathVariable("memberGifticonId") Long memberGifticonId,
                                 @PathVariable("memberId") Long memberId) {
        mypageGifticonService.deleteMyGifticon(memberGifticonId, memberId);
    }

}
