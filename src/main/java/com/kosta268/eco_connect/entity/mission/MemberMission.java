package com.kosta268.eco_connect.entity.mission;

import com.kosta268.eco_connect.entity.member.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
public class MemberMission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_mission_id")
    private Long memberMissionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mission_id")
    private Mission mission;

    @OneToMany(mappedBy = "memberMission", cascade = CascadeType.ALL)
    @Builder.Default
    private List<MissionImage> images = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private MissionStatus status; // 미션 진행 상태
    private String title;
    private String content;

    private LocalDateTime participateAt; // 미션 참여 시간
    private LocalDateTime finishedAt;

    public MemberMission() {}
    public void approve() {
        this.status = MissionStatus.COMPLETED;
        this.finishedAt = LocalDateTime.now();
    }

    public void reject() {
        this.status = MissionStatus.REJECTED;
        this.finishedAt = LocalDateTime.now();
    }

    @PrePersist
    public void setParticipateTime() {
        this.participateAt = LocalDateTime.now();
    }
}
