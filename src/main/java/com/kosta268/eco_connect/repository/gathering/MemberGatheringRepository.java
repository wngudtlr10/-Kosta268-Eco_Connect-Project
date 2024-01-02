package com.kosta268.eco_connect.repository.gathering;

import com.kosta268.eco_connect.entity.gathering.Gathering;
import com.kosta268.eco_connect.entity.gathering.MemberGathering;
import com.kosta268.eco_connect.entity.member.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberGatheringRepository extends JpaRepository<MemberGathering, Long> {
    boolean existsByMemberAndGathering(Member member, Gathering gathering);

    Page<MemberGathering> findByMember_MemberId(Long memberId, Pageable pageable);

    void deleteByGathering_GatheringIdAndMember_MemberId(Long gatheringId, Long memberId);
}
