package com.kosta268.eco_connect.repository.gifticon;

import com.kosta268.eco_connect.entity.gifticon.Gifticon;
import com.kosta268.eco_connect.entity.gifticon.MemberGifticon;
import com.kosta268.eco_connect.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberGifticonRepository extends JpaRepository<MemberGifticon, Long> {
    List<MemberGifticon> findByMember(Member member);

    Optional<MemberGifticon> findByMemberAndGifticon(Member member, Gifticon gifticon);
}
