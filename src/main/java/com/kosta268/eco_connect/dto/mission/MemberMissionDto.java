package com.kosta268.eco_connect.dto.mission;

import com.kosta268.eco_connect.entity.mission.MemberMission;
import com.kosta268.eco_connect.entity.mission.MissionStatus;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MemberMissionDto {
    private Long memberMissionId;
    private Long memberId;
    private Long missionId;
    private String status;
    private String title;
    private String content;

    public MemberMission toEntity() {
        MemberMission memberMission = new MemberMission();
        // memberId와 missionId를 이용해서 member와 mission을 설정하는 로직 필요
        memberMission.setMemberMissionId(memberMissionId);
        memberMission.setStatus(MissionStatus.valueOf(status));
        memberMission.setTitle(title);
        memberMission.setContent(content);
        // images를 MissionImage 리스트로 변환하는 로직이 필요
        return memberMission;
    }

    public static MemberMissionDto fromEntity(MemberMission memberMission) {
        return MemberMissionDto.builder()
                .memberMissionId(memberMission.getMemberMissionId())
                .memberId(memberMission.getMember().getMemberId())
                .missionId(memberMission.getMission().getMissionId())
                .status(memberMission.getStatus().name())
                .title(memberMission.getTitle())
                .content(memberMission.getContent())
                .build();
    }
}
