package com.kosta268.eco_connect.controller.funding;

import com.kosta268.eco_connect.entity.funding.Funding;
import com.kosta268.eco_connect.dto.funding.FundingDto;
import com.kosta268.eco_connect.service.funding.FundingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/funding")
public class FundingController {
    private FundingService fundingService;

    @Autowired
    public void FundingApiController(FundingService fundingService) {
        this.fundingService = fundingService;
    }

    //펀딩 all 반환
    @GetMapping
    public ResponseEntity<List<Funding>> getAllFundings() {
        List<Funding> fundings = fundingService.getAllFundings();
        return ResponseEntity.ok(fundings);
    }

    //id로 특정 펀딩 검색
    @GetMapping("/{id}")
    public ResponseEntity<Funding> getFundingById(@PathVariable Long id) {
        try {
            Funding funding = fundingService.getFundingById(id);
            return ResponseEntity.ok(funding);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    //새 펀딩 생성
    @PostMapping
    public ResponseEntity<Funding> createFunding(@RequestBody Funding funding) {
        Funding createdFunding = fundingService.createFunding(funding);
        return ResponseEntity.ok(createdFunding);
    }

    //펀딩 값 전송
    @PostMapping("/write")
    public ResponseEntity<Funding> createFunding(@RequestPart("data") Funding funding,
                                                 @RequestPart("image") MultipartFile[] images) {
        Funding createdFunding = fundingService.createFundingWithImages(funding, images);
        return ResponseEntity.ok(createdFunding);
    }

    // 기존 펀딩 업데이트
    @PutMapping("/update/{fundingId}")
    public ResponseEntity<Funding> updateFunding(@PathVariable Long fundingId, @RequestBody Funding fundingUpdates) {
        try {
            Funding existingFunding = fundingService.getFundingById(fundingId);

            // 필요한 필드를 업데이트
            existingFunding.setTitle(fundingUpdates.getTitle());
            existingFunding.setAuthor(fundingUpdates.getAuthor());
            // ... 다른 필드도 이와 같이 업데이트

            Funding updatedFunding = fundingService.updateFunding(existingFunding);
            return ResponseEntity.ok(updatedFunding);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    // id로 기존 펀딩 삭제
    @DeleteMapping("delete/{fundingId}")
    public ResponseEntity<Void> deleteFunding(@PathVariable Long fundingId) {
        try {
            fundingService.deleteFunding(fundingId);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // id로 기존 펀딩 수정


    //특정 펀딩 조회 -> null값 반환됨 (수정해야됨)
//    @GetMapping("setting/{fundingId}")
//    public FundingDto fundingDto(@PathVariable Long fundingId) {
//
//        System.out.println("FundingApiController진입");
//        log.info("Received FundingDto: " + fundingId);
//        Funding entity = fundingService.getFundingById(fundingId);
//
//        FundingDto dto = new FundingDto();
//        dto.setFundingId(fundingId);
//        dto.setTitle(entity.getTitle());
//        dto.setAuthor(entity.getAuthor());
//        dto.setContent(entity.getContent());
//        dto.setStartAt(entity.getStartAt());
//        dto.setEndAt(entity.getEndAt());
//        dto.setFundingStatus(entity.getFundingStatus());
//        dto.setLikes(entity.getLikes());
//        dto.setPrice(entity.getPrice());
//        dto.setFundingCategoryId(entity.getFundingCategoryId());
//        dto.setCreateAt(entity.getCreateAt());
//        dto.setModifyAt(entity.getModifyAt());
//        dto.setViewCount(entity.getViewCount());
//        dto.setTotalCollectedAmount(entity.getTotalCollectedAmount());
//        dto.setFundingPeople(entity.getFundingPeople());
//        return dto;
//    }

}



