package com.kosta268.eco_connect.dto.mission;

import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.entity.mission.Mission;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class MissionDto {
    private Long missionId;
    private String title;
    private String description;
    private String image;
    private int point;
    private String host;
    private String zoneCode;
    private String fullAddress;
    private String subAddress;
    private Status status;
    private String category;
    private LocalDateTime startAt;
    private LocalDateTime endAt;
    private LocalDateTime deadline;


    public static MissionDto fromEntity(Mission mission) {
        MissionDto missionDto = new MissionDto();
        missionDto.setMissionId(mission.getMissionId());
        missionDto.setTitle(mission.getTitle());
        missionDto.setDescription(mission.getDescription());
        missionDto.setImage(mission.getImage());
        missionDto.setPoint(mission.getPoint());
        missionDto.setHost(mission.getHost());
        missionDto.setZoneCode(mission.getAddress().getZoneCode());
        missionDto.setFullAddress(mission.getAddress().getFullAddress());
        missionDto.setSubAddress(mission.getAddress().getSubAddress());
        missionDto.setStatus(mission.getStatus());
        missionDto.setCategory(mission.getCategory());
        missionDto.setStartAt(mission.getStartAt());
        missionDto.setEndAt(mission.getEndAt());
        missionDto.setDeadline(mission.getDeadline());

        return missionDto;
    }

}
