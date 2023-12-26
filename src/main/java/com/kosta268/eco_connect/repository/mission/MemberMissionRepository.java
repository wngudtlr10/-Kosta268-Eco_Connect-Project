package com.kosta268.eco_connect.repository.mission;

import com.kosta268.eco_connect.entity.mission.MemberMission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberMissionRepository extends JpaRepository<MemberMission, Long> {
    boolean existsByMemberMemberIdAndMissionMissionId(Long memberId, Long missionId);
}
