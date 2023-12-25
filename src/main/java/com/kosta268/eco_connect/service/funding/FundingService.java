package com.kosta268.eco_connect.service.funding;

import com.kosta268.eco_connect.entity.funding.FundingEntity;
import com.kosta268.eco_connect.entity.funding.Funding;
import com.kosta268.eco_connect.repository.funding.FundingRepository;
import com.kosta268.eco_connect.entity.Status;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class FundingService {

    private final FundingRepository fundingRepository;
    private final MemberRepository memberRepository;


    @Transactional(readOnly = true) //읽기전용 트랜잭션
    public List<Funding> getAllFundings() {
        return fundingRepository.findAll();
    }


    @Transactional(readOnly = true) //읽기전용 트랜잭션
    public Funding getFundingById(Long id) {
        Funding funding = fundingRepository.findById(id).orElse(null);
        log.info(String.format("ID %d에 대한 Funding을 가져옴: %s", id, funding));
        return funding;
    }


    public Funding createFunding(Funding funding) {
        return fundingRepository.save(funding);
    }


    public void deleteFunding(Long id) {
        Funding funding = fundingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Funding not found for ID: " + id));
        fundingRepository.deleteById(id);
    }
}
