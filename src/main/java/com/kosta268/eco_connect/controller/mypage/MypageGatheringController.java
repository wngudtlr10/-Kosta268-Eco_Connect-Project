package com.kosta268.eco_connect.controller.mypage;

import com.kosta268.eco_connect.dto.mypage.MypageGatheringDto;
import com.kosta268.eco_connect.security.CustomUserDetails;
import com.kosta268.eco_connect.service.mypage.MypageGathringService;
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
public class MypageGatheringController {
    private final MypageGathringService mypageGathringService;

    @GetMapping("/joined-gathering")
    public Page<MypageGatheringDto> mypageJoinedGatheringList(@AuthenticationPrincipal CustomUserDetails userDetails,
                                                              @PageableDefault(size = 5) Pageable pageable) {
        Long memberId = userDetails.getMemberId();

        return mypageGathringService.findJoinedGathering(memberId, pageable);
    }

    @DeleteMapping("/joined-gathering/gatheringId/{gatheringId}/memberId/{memberId}")
    public void deleteGathering(@PathVariable("gatheringId") Long gatheringId,
                                @PathVariable("memberId") Long memberId) {
        mypageGathringService.deleteJoinedGathering(gatheringId, memberId);
    }

    @GetMapping("/my-gathering")
    public Page<MypageGatheringDto> mypageMyGatheringList(@AuthenticationPrincipal CustomUserDetails userDetails,
                                                          @PageableDefault(size = 5) Pageable pageable) {
        Long memberId = userDetails.getMemberId();
        return mypageGathringService.findMyGathering(memberId, pageable);
    }
}
