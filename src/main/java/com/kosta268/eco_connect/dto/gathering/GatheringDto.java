package com.kosta268.eco_connect.dto.gathering;

import com.kosta268.eco_connect.entity.Address;
import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.entity.gathering.Gathering;
import com.kosta268.eco_connect.entity.member.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
public class GatheringDto {

    private Long gatheringId;
    private Long creatorId;
    private String title;
    private String intro;
    private String etc;
    private String zoneCode;
    private String fullAddress;
    private String subAddress;
    private String image;
    private Status status;
    private LocalDateTime deadline;
    private LocalDateTime startAt;
    private int count;
    private int capacity;

    public Gathering toEntity(Member creator) {
        Address address = new Address(zoneCode, fullAddress, subAddress);
        return Gathering.builder()
                .gatheringId(gatheringId)
                .creator(creator)
                .title(title)
                .intro(intro)
                .etc(etc)
                .location(address)
                .image(image)
                .status(status)
                .deadline(deadline)
                .startAt(startAt)
                .count(count)
                .capacity(capacity)
                .build();

    }

    public static GatheringDto fromEntity(Gathering gathering) {
        Address address = gathering.getLocation();

        return GatheringDto.builder()
                .gatheringId(gathering.getGatheringId())
                .creatorId(gathering.getCreator() != null ? gathering.getCreator().getMemberId() : null)
                .title(gathering.getTitle())
                .intro(gathering.getIntro())
                .etc(gathering.getEtc())
                .zoneCode(address.getZoneCode())
                .fullAddress(address.getFullAddress())
                .subAddress(address.getSubAddress())
                .image(gathering.getImage())
                .status(gathering.getStatus())
                .deadline(gathering.getDeadline())
                .startAt(gathering.getStartAt())
                .count(gathering.getCount())
                .capacity(gathering.getCapacity())
                .build();
    }
}
