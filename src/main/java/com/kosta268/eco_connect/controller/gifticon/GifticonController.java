package com.kosta268.eco_connect.controller.gifticon;

import com.kosta268.eco_connect.dto.gifticon.GifticonCreateDto;
import com.kosta268.eco_connect.dto.gifticon.GifticonDetailDto;
import com.kosta268.eco_connect.dto.gifticon.GifticonDto;
import com.kosta268.eco_connect.dto.gifticon.GifticonUpdateDto;
import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import com.kosta268.eco_connect.service.gifticon.GifticonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/gifticons")
public class GifticonController {

    private final GifticonService gifticonService;

    @GetMapping
    public List<GifticonDetailDto> getGifticonList() {
        List<Gifticon> gifticons = gifticonService.findAll();
        return gifticons.stream()
                .map(GifticonDetailDto::fromEntity)
                .collect(Collectors.toList());
    }
    @GetMapping("/{gifticonId}")
    public GifticonDetailDto getGifticon(@PathVariable Long gifticonId) {
        Gifticon gifticon = gifticonService.findById(gifticonId);
        return GifticonDetailDto.fromEntity(gifticon);
    }

    @PostMapping
    public void addGifticon(GifticonCreateDto gifticonCreateDto) {
        gifticonService.createGifticon(gifticonCreateDto);
    }

    @DeleteMapping("/{gifticonId}")
    public void removeGifticon(@PathVariable Long gifticonId) {
        gifticonService.deleteGifticon(gifticonId);
    }

    @PatchMapping("/{gifticonId}")
    public void modifyGifticon(@PathVariable Long gifticonId, GifticonUpdateDto gifticonUpdateDto) {
        gifticonService.modifyGifticon(gifticonId, gifticonUpdateDto);
    }

}
