package com.kosta268.eco_connect.controller.gathering;

import com.kosta268.eco_connect.dto.gathering.GatheringCreateDto;
import com.kosta268.eco_connect.dto.gathering.GatheringDto;
import com.kosta268.eco_connect.dto.gathering.GatheringUpdateDto;
import com.kosta268.eco_connect.dto.member.MemberDto;
import com.kosta268.eco_connect.entity.gathering.Category;
import com.kosta268.eco_connect.entity.gathering.Gathering;
import com.kosta268.eco_connect.entity.gathering.MemberGathering;
import com.kosta268.eco_connect.service.gathering.GatheringService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.Hibernate;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/gathering")
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
public class GatheringController {
    private final GatheringService gatheringService;
    @GetMapping
    public ResponseEntity<Page<GatheringDto>> findGatherings(@RequestParam(required = false) String status,
                                                             @RequestParam(required = false) String title,
                                                             @RequestParam(required = false) Category category,
                                                             @PageableDefault(size = 8) Pageable pageable) {

        String categoryName = category != null ? category.name() : null;
        log.info("status = {}, title = {}, category = {}", status, title, categoryName);
        Page<Gathering> gatherings = gatheringService.findGatherings(status, title, categoryName, pageable);
        return ResponseEntity.ok(gatherings.map(GatheringDto::fromEntity));
    }

    @GetMapping("/{gatheringId}")
    public ResponseEntity<GatheringDto> gatheringDetails(@PathVariable Long gatheringId) {
        Gathering gathering = gatheringService.findGatheringById(gatheringId);
        GatheringDto gatheringDto = GatheringDto.fromEntity(gathering);
        return new ResponseEntity<>(gatheringDto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Resource> gatheringAdd(@ModelAttribute GatheringCreateDto gatheringCreateDto) throws IOException {
        log.info("id = {}", gatheringCreateDto.getCreatorId());
        gatheringService.addGathering(gatheringCreateDto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{gatheringId}")
    public void gatheringModify(@PathVariable Long gatheringId, @ModelAttribute GatheringUpdateDto gatheringUpdateDto) throws IOException {
        gatheringService.modifyGathering(gatheringId, gatheringUpdateDto);
    }

    @GetMapping("/{gatheringId}/members")
    public List<MemberDto> gatheringMembers(@PathVariable Long gatheringId) {
        Gathering gathering = gatheringService.findGatheringById(gatheringId);
        List<MemberGathering> memberGatherings = gathering.getMemberGatherings();

        List<MemberDto> members = memberGatherings.stream()
                .map(memberGathering -> MemberDto.fromEntity(memberGathering.getMember()))
                .collect(Collectors.toList());

        return members;
    }

    @DeleteMapping("/{gatheringId}")
    public void gatheringRemove(@PathVariable Long gatheringId) {

        gatheringService.removeById(gatheringId);

    }
}
