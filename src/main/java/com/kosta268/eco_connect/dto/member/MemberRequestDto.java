package com.kosta268.eco_connect.dto.member;

import com.kosta268.eco_connect.entity.member.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberRequestDto {
    private String id;
    private String password;
    private String email;

    public static MemberRequestDto fromEntity(Member member) {
        return MemberRequestDto.builder()
                .id(member.getId())
                .password(member.getPassword())
                .email(member.getEmail())
                .build();
    }

    public Member applyPasswordEncoder(PasswordEncoder passwordEncoder) {
        return Member.builder()
                .id(this.id)
                .password(passwordEncoder.encode(this.password))
                .email(this.email)
                .build();
    }

    // token 발급
    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(id, password);
    }
}
