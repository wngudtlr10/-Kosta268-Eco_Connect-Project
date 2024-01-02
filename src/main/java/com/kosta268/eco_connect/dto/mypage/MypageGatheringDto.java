package com.kosta268.eco_connect.dto.mypage;

import com.kosta268.eco_connect.entity.gathering.Gathering;
import com.kosta268.eco_connect.entity.member.Member;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Builder
@Data
public class MypageGatheringDto {
    private Long gatheringId;
    private Long creatorId;
    private String creator;
    private String title;
//    private String zoneCode;
    private String fullAddress;
    private String subAddress;
    private String image;
    private int count;
    private int capacity;
    private LocalDateTime startAt;
    private String status;

    public static MypageGatheringDto fromEntity(Gathering gathering) {
        return MypageGatheringDto.builder()
                .gatheringId(gathering.getGatheringId())
                .creatorId(gathering.getCreator().getMemberId())
                .creator(gathering.getCreator().getId())
                .title(gathering.getTitle())
                .fullAddress(gathering.getLocation().getFullAddress())
                .subAddress(gathering.getLocation().getSubAddress())
                .image(gathering.getImage())
                .count(gathering.getCount())
                .capacity(gathering.getCapacity())
                .startAt(gathering.getStartAt())
                .status(gathering.getStatus().toString())
                .build();
    }
}
