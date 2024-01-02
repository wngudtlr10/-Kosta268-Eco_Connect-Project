package com.kosta268.eco_connect.repository.mission;

import com.kosta268.eco_connect.entity.mission.MemberMission;
import com.kosta268.eco_connect.entity.mission.MissionStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberMissionRepository extends JpaRepository<MemberMission, Long> {
    boolean existsByMemberMemberIdAndMissionMissionId(Long memberId, Long missionId);
    List<MemberMission> findByMemberMemberIdAndMissionMissionId(Long memberId, Long missionId);

    List<MemberMission> findByStatus(MissionStatus status);
}
