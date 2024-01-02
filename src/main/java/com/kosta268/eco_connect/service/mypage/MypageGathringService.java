package com.kosta268.eco_connect.service.mypage;

import com.kosta268.eco_connect.dto.mypage.MypageGatheringDto;
import com.kosta268.eco_connect.entity.gathering.Gathering;
import com.kosta268.eco_connect.entity.gathering.MemberGathering;
import com.kosta268.eco_connect.repository.gathering.GatheringRepository;
import com.kosta268.eco_connect.repository.gathering.MemberGatheringRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class MypageGathringService {
    private final GatheringRepository gatheringRepository;
    private final MemberGatheringRepository memberGatheringRepository;

    public Page<MypageGatheringDto> findJoinedGathering(Long memberId, Pageable pageable) {
        Page<MemberGathering> memberGatherings = memberGatheringRepository.findByMember_MemberId(memberId, pageable);

        return memberGatherings.map(memberGathering -> MypageGatheringDto.fromEntity(memberGathering.getGathering()));
    }

    public void deleteJoinedGathering(Long gatheringId, Long memberId) {
        memberGatheringRepository.deleteByGathering_GatheringIdAndMember_MemberId(gatheringId, memberId);
    }

    public Page<MypageGatheringDto> findMyGathering(Long memberId, Pageable pageable) {
        Page<Gathering> Gatherings = gatheringRepository.findByCreator_MemberId(memberId, pageable);

        return Gatherings.map(gathering -> MypageGatheringDto.fromEntity(gathering));
    }
}
