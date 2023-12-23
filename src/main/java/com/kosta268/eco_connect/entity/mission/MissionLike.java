package com.kosta268.eco_connect.entity.mission;

import com.kosta268.eco_connect.entity.member.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class MissionLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long missionLikeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mission_id")
    private Mission mission;
}
