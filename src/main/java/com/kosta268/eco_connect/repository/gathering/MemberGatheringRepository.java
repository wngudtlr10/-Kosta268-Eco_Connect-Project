package com.kosta268.eco_connect.repository.gathering;

import com.kosta268.eco_connect.entity.gathering.Gathering;
import com.kosta268.eco_connect.entity.gathering.MemberGathering;
import com.kosta268.eco_connect.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberGatheringRepository extends JpaRepository<MemberGathering, Long> {
    boolean existsByMemberAndGathering(Member member, Gathering gathering);
}
