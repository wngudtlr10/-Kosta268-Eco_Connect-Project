package com.kosta268.eco_connect.dto.mission;

import com.kosta268.eco_connect.entity.mission.MissionImage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class MissionImageDto {

    private Long missionImageId;
    private String imageUrl;

    public static MissionImageDto fromEntity(MissionImage missionImage) {
        return new MissionImageDto(missionImage.getMissionImageId(), missionImage.getImageUrl());
    }
}
