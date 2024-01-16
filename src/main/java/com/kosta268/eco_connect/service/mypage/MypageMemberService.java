package com.kosta268.eco_connect.service.mypage;

import com.kosta268.eco_connect.dto.mypage.*;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import com.kosta268.eco_connect.service.S3FileUploader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class MypageMemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final S3FileUploader s3FileUploader;

    public MypageMemberDto findMyMember(Long memberId) {
        Member findMember = memberRepository.findById(memberId).orElseThrow(() -> new NoSuchElementException());

        return MypageMemberDto.fromEntity(findMember);
    }

    public MypageModifyMemberDto findModifyMyMember(Long memberId) {
        Member findMember = memberRepository.findById(memberId).orElseThrow(() -> new NoSuchElementException());

        return MypageModifyMemberDto.fromEntity(findMember);
    }

    public MypageModifyMemberDto modifyMemberAddress(Long memberId, MypageModifyAddressDto mypageModifyAddressDto) {
        Member findMember = memberRepository.findById(memberId).orElseThrow(() -> new NoSuchElementException());

        findMember.setZoneCode(mypageModifyAddressDto.getZoneCode());
        findMember.setFullAddress(mypageModifyAddressDto.getFullAddress());
        findMember.setSubAddress(mypageModifyAddressDto.getSubAddress());
        Member saveMember = memberRepository.save(findMember);

        return MypageModifyMemberDto.fromEntity(saveMember);
    }

    public boolean modifyMemberPassword(Long memberId, MypageModifyPasswordDto mypageModifyPasswordDto) {
        Member findMember = memberRepository.findById(memberId).orElseThrow(() -> new NoSuchElementException());

        if (!passwordEncoder.matches(mypageModifyPasswordDto.getCurrentPassword(), findMember.getPassword())) {
            return false;
        }

        findMember.setPassword(passwordEncoder.encode(mypageModifyPasswordDto.getNewPassword()));
        memberRepository.save(findMember);

        return true;
    }

    public void modifyMemberProfile(Long memberId, MypageModifyImageDto mypageModifyImageDto) {
        Member findMember = memberRepository.findById(memberId).orElseThrow(() -> new NoSuchElementException());
        String filePath = "images/profile";
        String imageUrl = s3FileUploader.uploadFileToS3(mypageModifyImageDto.getImage(), filePath);

        findMember.setProfile(imageUrl);

        memberRepository.save(findMember);
    }
}
