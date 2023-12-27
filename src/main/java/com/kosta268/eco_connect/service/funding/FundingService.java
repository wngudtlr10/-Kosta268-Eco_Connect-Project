package com.kosta268.eco_connect.service.funding;

import com.kosta268.eco_connect.entity.funding.Funding;
import com.kosta268.eco_connect.entity.funding.FundingEntity;
import com.kosta268.eco_connect.entity.funding.FundingImageEntity;
import com.kosta268.eco_connect.repository.funding.FundingImageRepository;
import com.kosta268.eco_connect.repository.funding.FundingRepository;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class FundingService {

    private final FundingRepository fundingRepository;
    private final FundingImageRepository fundingImageRepository;
    private final MemberRepository memberRepository;


    @Transactional(readOnly = true) //읽기전용 트랜잭션
    public List<Funding> getAllFundings() {
        return fundingRepository.findAll();
    }


    @Transactional(readOnly = true) //읽기전용 트랜잭션
    public Funding getFundingById(Long fundingId) {
        Funding funding = fundingRepository.findById(fundingId).orElse(null);
        log.info(String.format("ID %d에 대한 Funding을 가져옴: %s", fundingId, funding));
        return funding;
    }

    //펀딜 글 작성
    public Funding createFunding(Funding funding) {
        funding.setFundingId(Long.valueOf("1"));
        // FundingEntity를 DB에 저장하는 로직
        return fundingRepository.save(funding);
    }

    //펀딩 이미지 업로드
    @Transactional
    public Funding createFundingWithImages(Funding funding, MultipartFile[] images) {
        for (MultipartFile file : images) {
            // 파일 처리 및 저장
            String imagePath = "a"; // processAndSaveFile() 로 변경. 실제 파일 저장 및 이미지 URL 반환처리가 필요합니다.

            FundingImageEntity fundingImage = new FundingImageEntity();
            fundingImage.setImage_url(imagePath); // 이미지 경로 설정
            funding.getImages().add(fundingImage); // FundingEntity에 이미지 추가
        }

        // 자동으로 연관된 FundingImageEntity들도 함께 저장됩니다.
        return fundingRepository.save(funding);
    }
    //펀딩 수정
    public Funding updateFunding(Funding funding) {
        return fundingRepository.save(funding);
    }

    //펀딩 삭제
    public void deleteFunding(Long fundingId) {
        Funding funding = fundingRepository.findById(fundingId)
                .orElseThrow(() -> new RuntimeException("Funding not found for ID: " + fundingId));
        fundingRepository.deleteById(fundingId);
    }
}
