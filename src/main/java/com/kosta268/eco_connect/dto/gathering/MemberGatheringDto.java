package com.kosta268.eco_connect.dto.gathering;

import com.kosta268.eco_connect.entity.gathering.Gathering;
import com.kosta268.eco_connect.entity.gathering.MemberGathering;
import com.kosta268.eco_connect.entity.member.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class MemberGatheringDto {
    private Long memberId;
    private Long gatheringId;

    public MemberGathering toEntity(Member member, Gathering gathering) {
        return MemberGathering.builder()
                .member(member)
                .gathering(gathering)
                .build();
    }

    public static MemberGatheringDto fromEntity(MemberGathering memberGathering) {
        return MemberGatheringDto.builder()
                .memberId(memberGathering.getMember().getMemberId())
                .gatheringId(memberGathering.getGathering().getGatheringId())
                .build();
    }
}
