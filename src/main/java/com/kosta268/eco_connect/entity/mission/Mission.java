package com.kosta268.eco_connect.entity.mission;

import com.kosta268.eco_connect.entity.Address;
import com.kosta268.eco_connect.entity.Status;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Mission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mission_id")
    private Long missionId;

    @Column(length = 20)
    private String title;

    private String description; // 미션설명
    private String image;
    private int point; // 미션 완료시 획득 포인트

    private LocalDateTime createAt = LocalDateTime.now();
    private LocalDateTime modifyAt;


    @Enumerated(EnumType.STRING)
    private Status status = Status.OPEN; // 참여가능, 참여마감, 종료

    @Embedded
    private Address address;

    private LocalDateTime startAt;
    private LocalDateTime endAt;
    private LocalDateTime deadline;

    private String category; // 카테고리 (3개밖에 없어서 따로 테이블을 두지 않으려고 생각중임)

    private String host; // 주최자

    @OneToMany(mappedBy = "mission")
    private List<MemberMission> memberMissions = new ArrayList<>();

    @OneToMany(mappedBy = "mission")
    private List<MissionLike> likes = new ArrayList<>();

    @PrePersist
    public void prePersist() {
        this.createAt = LocalDateTime.now();
    }
    @PreUpdate
    public void onUpdate() {
        this.modifyAt = LocalDateTime.now();
    }

    public int getLikesCount() {
        return likes.size();
    }

    public void addMemberMission(MemberMission memberMission) {
        this.memberMissions.add(memberMission);
        memberMission.setMission(this);
    }
}
