package com.kosta268.eco_connect.dto.gathering;

import com.kosta268.eco_connect.entity.Address;
import com.kosta268.eco_connect.entity.gathering.Category;
import com.kosta268.eco_connect.entity.gathering.Gathering;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Getter
@Setter
public class GatheringUpdateDto {
    private String title;
    private String intro;
    private Category category;
    private String etc;
    private String zoneCode;
    private String fullAddress;
    private String subAddress;

    private MultipartFile image;
    private LocalDateTime deadline;
    private LocalDateTime startAt;
    private int capacity;

    public Gathering toEntity() {
        Address address = new Address(zoneCode, fullAddress, subAddress);
        return Gathering.builder()
                .title(title)
                .intro(intro)
                .category(category)
                .etc(etc)
                .location(address)
                .image(image.getOriginalFilename())
                .deadline(deadline)
                .startAt(startAt)
                .capacity(capacity)
                .build();
    }

    public void updateGathering(Gathering gathering) {
        Address address = new Address(zoneCode, fullAddress, subAddress);

        gathering.setTitle(this.title);
        gathering.setIntro(this.intro);
        gathering.setCategory(this.category);
        gathering.setEtc(this.etc);
        gathering.setLocation(address);
        gathering.setDeadline(this.deadline);
        gathering.setStartAt(this.startAt);
        gathering.setCapacity(this.capacity);

    }
}
