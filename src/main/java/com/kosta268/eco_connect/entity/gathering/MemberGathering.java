package com.kosta268.eco_connect.entity.gathering;

import com.kosta268.eco_connect.entity.member.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberGathering {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long memberGatheringId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gathering_id")
    private Gathering gathering;

    public MemberGathering(Member member, Gathering gathering) {
        this.member = member;
        this.gathering = gathering;
    }
}
