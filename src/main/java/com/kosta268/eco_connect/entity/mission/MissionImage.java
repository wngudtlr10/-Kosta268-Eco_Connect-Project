package com.kosta268.eco_connect.entity.mission;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;

@Entity
@Getter
public class MissionImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long missionImageId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_mission_id")
    private MemberMission memberMission;

    private String imageUrl;

    private String fileHash;

    private String cameraModel;

    private LocalDateTime dateTimeOriginal;

    private Double latitude;

    private Double longitude;

    private Double altitude;

    public double dmsToDd(String dms) {
        String[] split = dms.split(".");

        double degrees = Double.parseDouble(split[0].trim());
        double minutes = Double.parseDouble(split[1].trim());
        double seconds = Double.parseDouble(split[2].trim());

        return degrees + (minutes / 60) + (seconds / 3600);

    }

    public MissionImage() {}

    public MissionImage(String imageUrl, MemberMission memberMission) {
        this.imageUrl = imageUrl;
        this.memberMission = memberMission;
    }
    public MissionImage(String imageUrl, String fileHash, MemberMission memberMission) {
        this.imageUrl = imageUrl;
        this.fileHash = fileHash;
        this.memberMission = memberMission;
    }

    public MissionImage(String imageUrl, String fileHash, String cameraModel, LocalDateTime dateTimeOriginal, Double latitude, Double longitude, Double altitude, MemberMission memberMission) {
        this.imageUrl = imageUrl;
        this.fileHash = fileHash;
        this.cameraModel = cameraModel;
        this.dateTimeOriginal = dateTimeOriginal;
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.memberMission = memberMission;
    }
}
