package com.kosta268.eco_connect.controller.mypage;

import com.kosta268.eco_connect.dto.mypage.*;
import com.kosta268.eco_connect.security.CustomUserDetails;
import com.kosta268.eco_connect.service.mypage.MypageMemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/mypage")
public class MypageMemberController {
    private final MypageMemberService mypageMemberService;

    @GetMapping("/member")
    public ResponseEntity<MypageMemberDto> findMyMember(@AuthenticationPrincipal CustomUserDetails userDetails) {
        Long memberId = userDetails.getMemberId();

        return ResponseEntity.ok(mypageMemberService.findMyMember(memberId));
    }

    @GetMapping("/modify/member")
    public ResponseEntity<MypageModifyMemberDto> findModifyMyMember(@AuthenticationPrincipal CustomUserDetails userDetails) {
        Long memberId = userDetails.getMemberId();

        return ResponseEntity.ok(mypageMemberService.findModifyMyMember(memberId));
    }

    @PutMapping("/modify/member/{memberId}/address")
    public ResponseEntity<MypageModifyMemberDto> modifyMemberAddress(@PathVariable("memberId") Long memberId,
                                                                     @RequestBody MypageModifyAddressDto mypageModifyAddressDto) {
        log.warn("MypageModifyAddressDto : {}", mypageModifyAddressDto);

        return ResponseEntity.ok(mypageMemberService.modifyMemberAddress(memberId, mypageModifyAddressDto));
    }

    @PutMapping("/modify/member/{memberId}/password")
    public ResponseEntity<String> modifyMemberPassword(@PathVariable("memberId") Long memberId,
                                                       @RequestBody MypageModifyPasswordDto mypageModifyPasswordDto) {
        boolean result = mypageMemberService.modifyMemberPassword(memberId, mypageModifyPasswordDto);

        if (result) {
            return ResponseEntity.ok("비밀번호가 성공적으로 변경되었습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("현재 비밀번호가 일치하지 않습니다.");
        }
    }

    @PutMapping("/modify/member/{memberId}/profile")
    public void modifyMemberProfile(@PathVariable("memberId") Long memberId,
                                    @ModelAttribute MypageModifyImageDto mypageModifyImageDto) {
        mypageMemberService.modifyMemberProfile(memberId, mypageModifyImageDto);
    }
}
