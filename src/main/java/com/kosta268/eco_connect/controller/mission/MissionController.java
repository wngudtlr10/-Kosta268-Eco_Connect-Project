package com.kosta268.eco_connect.controller.mission;

import com.kosta268.eco_connect.dto.mission.MissionCreateDto;
import com.kosta268.eco_connect.dto.mission.MissionDto;
import com.kosta268.eco_connect.dto.mission.MissionUpdateDto;
import com.kosta268.eco_connect.entity.mission.Mission;
import com.kosta268.eco_connect.service.mission.MissionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/missions")
@Slf4j
public class MissionController {
    private final MissionService missionService;

    @PostMapping
    public ResponseEntity<?> createMission(MissionCreateDto missionCreateDto) {
        Mission mission = missionCreateDto.toEntity();
        MissionDto missionDto = MissionDto.fromEntity(mission);
        missionService.addMission(missionCreateDto);
        return ResponseEntity.ok(missionDto);

    }

    @GetMapping("/all")
    public List<MissionDto> missionListAll() {
        return missionService.findAll();
    }

//    @GetMapping
//    public Page<MissionDto> missionList(@PageableDefault(size = 8) Pageable pageable) {
//        return missionService.findAllMissions(pageable);
//    }

    @GetMapping
    public ResponseEntity<Page<MissionDto>> getMissions(@RequestParam(required = false) String category,
                                                        @RequestParam(required = false) String title,
                                                        @RequestParam(required = false) String status,
                                                        Pageable pageable) {
        Page<MissionDto> missions;
        log.info("category = {}, title = {}, status = {}", category, title, status);
        if ("전체".equals(category)) category = null;

        if (status != null && title != null && category != null) {
            missions = missionService.findByStatusAndTitleAndCategory(status, title, category, pageable);
        } else if (status != null && title != null) {
            missions = missionService.findByStatusAndTitle(status, title, pageable);
        } else if (status != null && category != null) {
            missions = missionService.findByStatusAndCategory(status, category, pageable);
        } else if (category != null && title != null) {
            missions = missionService.findByCategoryAndTitle(category, title, pageable);
        } else if (status != null) {
            missions = missionService.findByStatus(status, pageable);
        } else if (title != null) {
            missions = missionService.findAllByTitleLike(title, pageable);
        } else if (category != null) {
            missions = missionService.findByCategoryLike(category, pageable);
        } else {
            missions = missionService.findAllMissions(pageable);
        }

        return ResponseEntity.ok(missions);
    }

    @GetMapping("{missionId}")
    public MissionDto missionDetails(@PathVariable Long missionId) {
        return missionService.findById(missionId);
    }

    @GetMapping("/status")
    public Page<MissionDto> missionListByStatus(@RequestParam("status") String status, @PageableDefault(size = 8) Pageable pageable) {
        return missionService.findByStatus(status, pageable);
    }

    @GetMapping("/title")
    public Page<MissionDto> missionListByTitle(@RequestParam String title, @PageableDefault(size = 8) Pageable pageable) {
        return missionService.findAllByTitleLike("%" + title + "%" , pageable);
    }

    @GetMapping("/category")
    public Page<MissionDto> missionListByCategory(@RequestParam String category, @PageableDefault(size = 8) Pageable pageable) {
        return missionService.findByCategoryLike("%" + category + "%", pageable);
    }
    @DeleteMapping("/{missionId}")
    public void missionRemove(@PathVariable Long missionId) {
        missionService.removeById(missionId);
    }

    @PatchMapping("/{missionId}")
    public void missionUpdate(@PathVariable Long missionId, MissionUpdateDto missionUpdateDto) {

        missionService.modifyMission(missionId, missionUpdateDto);
    }
}
