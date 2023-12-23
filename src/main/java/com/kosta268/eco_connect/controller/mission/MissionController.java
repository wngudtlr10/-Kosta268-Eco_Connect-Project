package com.kosta268.eco_connect.controller.mission;

import com.kosta268.eco_connect.dto.mission.MissionCreateDto;
import com.kosta268.eco_connect.dto.mission.MissionDto;
import com.kosta268.eco_connect.dto.mission.MissionUpdateDto;
import com.kosta268.eco_connect.entity.mission.Mission;
import com.kosta268.eco_connect.service.mission.MissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/missions")
public class MissionController {
    private final MissionService missionService;

    @PostMapping
    public ResponseEntity<?> createMission(MissionCreateDto missionCreateDto) {
        Mission mission = missionCreateDto.toEntity();
        MissionDto missionDto = MissionDto.fromEntity(mission);
        missionService.addMission(missionCreateDto);
        return ResponseEntity.ok(missionDto);

    }

    @GetMapping
    public Page<MissionDto> missionList(@PageableDefault(size = 8) Pageable pageable) {
        return missionService.findAllMissions(pageable);
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
        return missionService.findAllByTitleLike(title, pageable);
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
