package com.kosta268.eco_connect.service.mission;

import com.kosta268.eco_connect.dto.mission.MissionCreateDto;
import com.kosta268.eco_connect.dto.mission.MissionDto;
import com.kosta268.eco_connect.dto.mission.MissionUpdateDto;
import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.entity.mission.Mission;
import com.kosta268.eco_connect.entity.mission.QMission;
import com.kosta268.eco_connect.repository.mission.MissionRepository;
import com.kosta268.eco_connect.service.S3FileUploader;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class MissionService {

    private final MissionRepository missionRepository;
    private final S3FileUploader s3FileUploader;

    public void addMission(MissionCreateDto missionCreateDto) {
        String filePath = "images/missions";
        String imageUrl = s3FileUploader.uploadFileToS3(missionCreateDto.getImage(), filePath);


        if (missionCreateDto.getStartAt().isAfter(missionCreateDto.getEndAt())) {
            throw new IllegalArgumentException("미션 종료 시간은 시작 시간보다 이후여야 합니다.");
        }
        Mission mission = missionCreateDto.toEntity();
        mission.setImage(imageUrl);
        missionRepository.save(mission);
    }
    public void modifyMission(Long id, MissionUpdateDto missionUpdateDto) {
        String filePath = "images/missions";
        String imageUrl = s3FileUploader.uploadFileToS3(missionUpdateDto.getImage(), filePath);
        Mission mission = missionRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("no such mission"));
        mission.setImage(imageUrl);
        if (missionUpdateDto.getPoint() < 0) {
            throw new IllegalArgumentException("point cannot be minus");
        }
        if (missionUpdateDto.getStartAt().isAfter(missionUpdateDto.getEndAt())) {
            throw new IllegalArgumentException("미션 종료 시간은 시작 시간보다 이후여야 합니다.");
        }
        missionUpdateDto.updateMission(mission);

    }


    public void removeById(Long missionId) {
        Mission mission = missionRepository.findById(missionId).orElseThrow(() -> new IllegalArgumentException("no such mission"));

        missionRepository.deleteById(missionId);
    }

    @Transactional(readOnly = true)
    public List<MissionDto> findAll() {
        List<Mission> missions = missionRepository.findAll();
        return missions.stream().map(MissionDto::fromEntity).toList();
    }

    @Transactional(readOnly = true)
    public MissionDto findById(Long missionId) {
        Mission mission = missionRepository.findById(missionId).orElseThrow(() -> new IllegalArgumentException("no such mission"));
        return MissionDto.fromEntity(mission);

    }

    @Transactional(readOnly = true)
    public Page<MissionDto> findAllMissions(Pageable pageable) {
        Page<Mission> missions = missionRepository.findAll(pageable);
        return missions.map(MissionDto::fromEntity);
    }

    @Transactional(readOnly = true)
    public Page<MissionDto> getMissions(String category, String title, String status, Pageable pageable) {
        BooleanBuilder builder = new BooleanBuilder();

        if (category != null && !category.equals("전체")) {
            builder.and(QMission.mission.category.like(category));
        }

        if (title != null) {
            builder.and(QMission.mission.title.like("%" + title + "%"));
        }

        if (status != null) {
            builder.and(QMission.mission.status.eq(Status.valueOf(status)));
        }

        Predicate predicate = builder.getValue() == null ? QMission.mission.isNotNull() : builder.getValue();

        Page<Mission> missions = missionRepository.findAll(predicate, pageable);
        return missions.map(MissionDto::fromEntity);
    }


    @Scheduled(cron = "0 0 0 * * *")
    public void modifyMissionStatus() {
        List<Mission> missions = missionRepository.findAll();
        for (Mission mission : missions) {
            if (mission.getDeadline().isBefore(LocalDateTime.now())) {
                mission.setStatus(Status.CLOSED);
            }
            // 종료된 미션에 대한 처리 필요
        }
    }

}
