package com.kosta268.eco_connect.dto.member;

import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.entity.member.Role;
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
    private String role;

    public Member toEntity() {
        return Member.builder()
                .memberId(memberId)
                .id(id)
                .email(email)
                .profile(profile)
                .role(Role.valueOf(role))
                .build();
    }

    public static MemberDto fromEntity(Member member) {
        return MemberDto.builder()
                .memberId(member.getMemberId())
                .id(member.getId())
                .email(member.getEmail())
                .profile(member.getProfile())
                .role(member.getRole().name())
                .build();
    }
}
