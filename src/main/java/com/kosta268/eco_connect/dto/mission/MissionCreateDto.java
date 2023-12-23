package com.kosta268.eco_connect.dto.mission;

import com.kosta268.eco_connect.entity.Address;
import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.entity.mission.Mission;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Getter
@Setter
public class MissionCreateDto {

    private String title;
    private String description;

    private MultipartFile image;

    private String zoneCode;
    private String fullAddress;
    private String subAddress;

    private int point;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime startAt;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime endAt;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime deadline;

    private String host;

    private String category;

    public Mission toEntity() {
        Address address = new Address(zoneCode, fullAddress, subAddress);

        return Mission.builder()
                .title(title)
                .description(description)
                .image(image.getOriginalFilename())
                .address(address)
                .point(point)
                .startAt(startAt)
                .endAt(endAt)
                .status(Status.OPEN)
                .deadline(deadline)
                .host(host)
                .category(category)
                .build();

    }


}
