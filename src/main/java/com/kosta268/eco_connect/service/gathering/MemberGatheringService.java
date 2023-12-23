package com.kosta268.eco_connect.service.gathering;

import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.entity.gathering.Gathering;
import com.kosta268.eco_connect.entity.gathering.MemberGathering;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.repository.gathering.GatheringRepository;
import com.kosta268.eco_connect.repository.gathering.MemberGatheringRepository;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class MemberGatheringService {
    private final MemberGatheringRepository memberGatheringRepository;
    private final MemberRepository memberRepository;
    private final GatheringRepository gatheringRepository;

    public MemberGathering joinGathering(Long memberId, Long gatheringId) throws Exception {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException("no such member"));
        Gathering gathering = gatheringRepository.findById(gatheringId).orElseThrow(() -> new IllegalArgumentException("no such gathering"));

        if (gathering.getCount() + 1 > gathering.getCapacity()) {
            log.info("모임 정원 초과");
            throw new Exception("모임 정원 초과");
        }
        else if (gathering.getStatus() == Status.CLOSED) {
            log.info("마감된 모임입니다.");
            throw new Exception("마감된 모임");
        }

        gathering.setCount(gathering.getCount() + 1);
        if (gathering.getCount() == gathering.getCapacity()) {
            gathering.setStatus(Status.CLOSED);
        }

        gatheringRepository.save(gathering);
        MemberGathering memberGathering = new MemberGathering();
        memberGathering.setMember(member);
        memberGathering.setGathering(gathering);
        return memberGatheringRepository.save(memberGathering);

    }
}
