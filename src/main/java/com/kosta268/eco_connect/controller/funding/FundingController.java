package com.kosta268.eco_connect.controller.funding;

import com.kosta268.eco_connect.dto.funding.FundingDto;
import com.kosta268.eco_connect.entity.funding.Funding;
import com.kosta268.eco_connect.entity.funding.FundingEntity;
import com.kosta268.eco_connect.repository.funding.FundingRepository;
import com.kosta268.eco_connect.service.funding.FundingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/api/funding")
public class FundingController {
    private FundingService fundingService;

    @Autowired
    public void FundingApiController(FundingService fundingService){
        this.fundingService = fundingService;
    }

//    @GetMapping("/{id}")
//    public Funding getFunding(@PathVariable Long id) {
//        Funding funding = fundingService.getFundingById(id);
//        System.out.println("funding System is not null");
//        if (funding == null) {
//            System.out.println("funding System is null");// 각 종류의 예외 처리 로직
//        }
//        return funding;
//    }

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

    // id로 기존 펀딩 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFunding(@PathVariable Long id) {
        try {
            fundingService.deleteFunding(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    //특정 펀딩 조회
    @GetMapping("setting/{id}")
    public FundingDto fundingDto (FundingEntity entity){
        System.out.println("FundingApiController진입");
        log.info("Received FundingDto: " + entity);
        FundingDto dto = new FundingDto();
        dto.setId(entity.getId());
        dto.setTitle(entity.getTitle());
        dto.setAuthor(entity.getAuthor());
        dto.setContent(entity.getContent());
        dto.setStartAt(entity.getStartAt());
        dto.setEndAt(entity.getEndAt());
        dto.setStatus(entity.getStatus());
        dto.setLikes(entity.getLikes());
        dto.setPrice(entity.getPrice());
        dto.setCategory_id(entity.getCategoryId());
        dto.setCreateAt(entity.getCreateAt());
        dto.setModifyAt(entity.getModifyAt());
        dto.setView_count(entity.getViewCount());
        dto.setTotal_collected_amount(entity.getTotalCollectedAmount());
        return dto;
    }

    //FundingWrite
    

}
