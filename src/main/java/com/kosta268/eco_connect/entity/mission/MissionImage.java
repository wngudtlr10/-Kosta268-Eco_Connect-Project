package com.kosta268.eco_connect.entity.mission;

import jakarta.persistence.*;

@Entity
public class MissionImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long missionImageId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_mission_id")
    private MemberMission memberMission;

    private String imageUrl;

    public MissionImage() {}

    public MissionImage(String imageUrl, MemberMission memberMission) {
        this.imageUrl = imageUrl;
        this.memberMission = memberMission;
    }
}
