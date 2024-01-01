package com.kosta268.eco_connect.repository.mission;

import com.kosta268.eco_connect.entity.mission.MemberMission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberMissionRepository extends JpaRepository<MemberMission, Long> {
    boolean existsByMemberMemberIdAndMissionMissionId(Long memberId, Long missionId);
    Optional<MemberMission> findByMemberMemberIdAndMissionMissionId(Long memberId, Long missionId);
}
