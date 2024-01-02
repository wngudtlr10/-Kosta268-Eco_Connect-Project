package com.kosta268.eco_connect.service.gifticon;

import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import com.kosta268.eco_connect.entity.gifticon.MemberGifticon;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.repository.gifticon.GifticonRepository;
import com.kosta268.eco_connect.repository.gifticon.MemberGifticonRepository;
import com.kosta268.eco_connect.repository.member.MemberRepository;
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

    public Gifticon findById(Long gifticonId) {
        return gifticonRepository.findById(gifticonId).orElseThrow(() -> new IllegalArgumentException("no such gifticon"));
    }

    public List<Gifticon> findAll() {
        return gifticonRepository.findAll();
    }
}

