package com.kosta268.eco_connect.repository.member;

import com.kosta268.eco_connect.entity.member.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, String> {
    RefreshToken findByValue(String refreshToken);
    void deleteByValue(String cookieRefreshToken);
}
