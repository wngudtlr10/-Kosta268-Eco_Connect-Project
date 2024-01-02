package com.kosta268.eco_connect.controller.mission;

import com.amazonaws.Response;
import com.kosta268.eco_connect.dto.mission.MemberMissionDto;
import com.kosta268.eco_connect.dto.mission.MemberMissionPostDto;
import com.kosta268.eco_connect.dto.mission.MemberMissionRequestDto;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.entity.mission.MemberMission;
import com.kosta268.eco_connect.security.CustomUserDetails;
import com.kosta268.eco_connect.service.member.MemberService;
import com.kosta268.eco_connect.service.mission.MemberMissionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@Slf4j
@RequiredArgsConstructor
public class MemberMissionController {

    private final MemberMissionService memberMissionService;

    @PostMapping("/missions/{missionId}/join")
    public ResponseEntity<?> joinMission(@PathVariable Long missionId, @AuthenticationPrincipal CustomUserDetails userDetails) {
        memberMissionService.joinMission(userDetails.getMemberId(),missionId);
        return ResponseEntity.ok(HttpStatus.CREATED);
    }


    @PostMapping("/missions/{missionId}/post")
    public ResponseEntity<?> writeMissionPost(@RequestParam("memberId") Long memberId,
                                              @RequestParam("missionId") Long missionId,
                                              @RequestParam("memberMissionId") Long memberMissionId,
                                              @RequestParam("title") String title,
                                              @RequestParam("content") String content,
                                              @RequestParam("images") List<MultipartFile> images) {
//        memberMissionService.addMemberMissionPost(memberMissionPostDto);
        MemberMissionPostDto memberMissionPostDto = new MemberMissionPostDto(memberMissionId, memberId, missionId, title, content, images);
        memberMissionService.addMemberMissionPost(memberMissionPostDto);
        return ResponseEntity.ok(HttpStatus.CREATED);
    }


    @PutMapping("/missions/{missionId}/approval")
    public ResponseEntity<?> approveMissionPost(@RequestBody MemberMissionRequestDto memberMissionRequestDto) {
        log.info("memberMissionId = {}", memberMissionRequestDto);
        memberMissionService.approveMissionPost(memberMissionRequestDto.getMemberMissionId());

        return ResponseEntity.ok().build();
    }

    @PutMapping("/missions/{missionId}/reject")
    public ResponseEntity<?> rejectMissionPost(@RequestBody MemberMissionRequestDto memberMissionRequestDto) {
        memberMissionService.rejectMissionPost(memberMissionRequestDto.getMemberMissionId());

        return ResponseEntity.ok().build();
    }

    @GetMapping("/members/{memberId}/missions")
    public ResponseEntity<List<MemberMissionDto>> memberMissionList(@AuthenticationPrincipal CustomUserDetails userDetails) {
        List<MemberMission> memberMissions = memberMissionService.findAll();
        List<MemberMissionDto> memberMissionDtos = memberMissions.stream()
                .map(MemberMissionDto::fromEntity)
                .collect(Collectors.toList());
        return ResponseEntity.ok(memberMissionDtos);
    }

    @GetMapping("/missions/members")
    public ResponseEntity<List<MemberMissionDto>> allMemberMissionList() {
        List<MemberMission> memberMissions = memberMissionService.findAll();
        List<MemberMissionDto> memberMissionDtos = memberMissions.stream()
                .map(MemberMissionDto::fromEntity)
                .collect(Collectors.toList());
        return ResponseEntity.ok(memberMissionDtos);

    }

    @DeleteMapping("/membermission/{memberMissionId}")
    public ResponseEntity<?> deleteMemberMission(@PathVariable Long memberMissionId) {
        memberMissionService.deleteMissionPost(memberMissionId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/members/{memberId}/missions")
    public void deleteMemberMissions(@AuthenticationPrincipal CustomUserDetails userDetails, @RequestBody List<Long> memberMissionIds) {
        memberMissionService.deleteMemberMissions(userDetails.getMemberId(), memberMissionIds);

    }
}
