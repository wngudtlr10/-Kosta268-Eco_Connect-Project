package com.kosta268.eco_connect.dto.mission;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
public class MemberMissionPostDto {
    private Long memberMissionId;
    private Long memberId;
    private Long missionId;
    private String title;
    private String content;
    private List<MultipartFile> images;


}
