package com.kosta268.eco_connect.entity.member;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;
    private String id;
    private String password;
    private String email;
    private String profile;
    private String address;
    private LocalDateTime createdIn;

    @Builder.Default
    @Enumerated(EnumType.STRING)
    private Role role = Role.ROLE_USER;

    @PrePersist
    public void prePersist() {
        this.createdIn = LocalDateTime.now();
    }
}
