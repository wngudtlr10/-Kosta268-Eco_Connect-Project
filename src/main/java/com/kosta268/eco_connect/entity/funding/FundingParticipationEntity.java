package com.kosta268.eco_connect.entity.funding;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name="fundingParticipation")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class FundingParticipationEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long fundingCommentId; //펀딩 참여 코드
    @Column
    private Long fundingId; //펀딩 아이디(외래키)
    @Column
    private Long memberId; // 멤버 아이디(외래키)

}
