package com.kosta268.eco_connect.service.gifticon;

import com.kosta268.eco_connect.dto.gifticon.GifticonCreateDto;
import com.kosta268.eco_connect.dto.gifticon.GifticonUpdateDto;
import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import com.kosta268.eco_connect.entity.gifticon.MemberGifticon;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.entity.mission.Mission;
import com.kosta268.eco_connect.repository.gifticon.GifticonRepository;
import com.kosta268.eco_connect.repository.gifticon.MemberGifticonRepository;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import com.kosta268.eco_connect.service.S3FileUploader;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class GifticonService {

    private final GifticonRepository gifticonRepository;
    private final S3FileUploader s3FileUploader;

    public Gifticon findById(Long gifticonId) {
        return gifticonRepository.findById(gifticonId).orElseThrow(() -> new IllegalArgumentException("no such gifticon"));
    }

    public List<Gifticon> findAll() {
        return gifticonRepository.findAll();
    }

    public void createGifticon(GifticonCreateDto gifticonCreateDto) {
        String barcodeFilePath = "images/gifticon/barcode";
        String imageFilePath = "images/gifticon/image";
        String barcodeImageUrl  = s3FileUploader.uploadFileToS3(gifticonCreateDto.getBarcode(), barcodeFilePath);
        String imageUrl = s3FileUploader.uploadFileToS3(gifticonCreateDto.getImage(), imageFilePath);

        Gifticon gifticon = gifticonCreateDto.toEntity();
        gifticon.setBarcode(barcodeImageUrl);
        gifticon.setImage(imageUrl);
        gifticonRepository.save(gifticon);

    }

    public void deleteGifticon(Long gifticonId) {
        gifticonRepository.deleteById(gifticonId);
    }
    public void modifyGifticon(Long gifticonId, GifticonUpdateDto gifticonUpdateDto) {
        Gifticon gifticon = gifticonRepository.findById(gifticonId).orElseThrow(() -> new IllegalArgumentException("no such gifticon"));

        String barcodeFilePath = "images/gifticon/barcode";
        String imageFilePath = "images/gifticon/image";

        String barcodeImageUrl = s3FileUploader.uploadFileToS3(gifticonUpdateDto.getBarcode(), barcodeFilePath);
        String imageUrl = s3FileUploader.uploadFileToS3(gifticonUpdateDto.getImage(), imageFilePath);

        gifticon.setBarcode(barcodeImageUrl);
        gifticon.setImage(imageUrl);

        gifticonUpdateDto.updateGifticon(gifticon);

        gifticonRepository.save(gifticon);
    }
}

