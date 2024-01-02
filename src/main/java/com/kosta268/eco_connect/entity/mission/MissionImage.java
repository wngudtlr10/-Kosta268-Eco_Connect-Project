package com.kosta268.eco_connect.entity.mission;

import jakarta.persistence.*;
import lombok.Getter;

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
}
