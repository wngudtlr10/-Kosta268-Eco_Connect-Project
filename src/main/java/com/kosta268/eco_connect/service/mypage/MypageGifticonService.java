package com.kosta268.eco_connect.service.mypage;

import com.kosta268.eco_connect.dto.mypage.MypageGifticonDto;
import com.kosta268.eco_connect.entity.gifticon.MemberGifticon;
import com.kosta268.eco_connect.repository.gifticon.GifticonRepository;
import com.kosta268.eco_connect.repository.gifticon.MemberGifticonRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class MypageGifticonService {
    private final GifticonRepository gifticonRepository;
    private final MemberGifticonRepository memberGifticonRepository;

    public Page<MypageGifticonDto> findMyGifticon(Long memberId, Pageable pageable) {
        Page<MemberGifticon> gifticons = memberGifticonRepository.findByMember_MemberId(memberId, pageable);

        return gifticons.map(gifticon -> MypageGifticonDto.fromEntity(gifticon));
    }

    public void deleteMyGifticon(Long memberGifticonId, Long memberId) {
        memberGifticonRepository.deleteByMemberGifticonIdAndMember_MemberId(memberGifticonId, memberId);
    }
}
