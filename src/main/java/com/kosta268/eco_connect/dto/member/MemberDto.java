package com.kosta268.eco_connect.dto.member;

import com.kosta268.eco_connect.entity.member.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class MemberDto {
    private Long memberId;
    private String id;
    private String email;
    private String profile;

    public Member toEntity() {
        return Member.builder()
                .memberId(memberId)
                .id(id)
                .email(email)
                .profile(profile)
                .build();
    }

    public static MemberDto fromEntity(Member member) {
        return MemberDto.builder()
                .memberId(member.getMemberId())
                .id(member.getId())
                .email(member.getEmail())
                .profile(member.getProfile())
                .build();
    }
}
