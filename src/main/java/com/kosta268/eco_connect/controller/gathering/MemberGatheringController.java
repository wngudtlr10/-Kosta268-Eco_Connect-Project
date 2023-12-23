package com.kosta268.eco_connect.controller.gathering;

import com.kosta268.eco_connect.dto.gathering.MemberGatheringDto;
import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.entity.gathering.Gathering;
import com.kosta268.eco_connect.entity.gathering.MemberGathering;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.security.CustomUserDetails;
import com.kosta268.eco_connect.service.gathering.GatheringService;
import com.kosta268.eco_connect.service.gathering.MemberGatheringService;
import com.kosta268.eco_connect.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.Hibernate;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j

public class MemberGatheringController {

    private final MemberService memberService;
    private final GatheringService gatheringService;
    private final MemberGatheringService memberGatheringService;

    @GetMapping("/member/{memberId}/gathering/{gatheringId}/join")
    public void joinGathering(@AuthenticationPrincipal CustomUserDetails userDetails, @PathVariable Long gatheringId) throws Exception {
        log.info("memberDetails = {}", userDetails.getMemberId());
        Member member = memberService.getMemberById(userDetails.getMemberId());
        Gathering gathering = gatheringService.findGatheringById(gatheringId);

        if (gathering.getStatus() != Status.OPEN) {
            throw new Exception("모임이 모집 중이 아닙니다.");
        }

        memberGatheringService.joinGathering(member.getMemberId(), gathering.getGatheringId());

    }

//    @GetMapping("/gathering/{gatheringId}/members")
//    public List<MemberGatheringDto> joinGatheringMembers(@PathVariable Long gatheringId) {
//        Gathering gathering = gatheringService.findGatheringById(gatheringId);
//        List<MemberGathering> memberGatherings = gathering.getMemberGatherings();
//        List<MemberGatheringDto> dtos = memberGatherings.stream().map(MemberGatheringDto::fromEntity).collect(Collectors.toList());
//        return dtos;
//    }
}
