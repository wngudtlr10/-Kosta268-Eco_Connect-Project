package com.kosta268.eco_connect.configuration.security;

//import com.example.websocketchat.jwt.JwtAccessDeniedHandler;
//import com.example.websocketchat.jwt.JwtAuthenticationEntryPoint;
//import com.example.websocketchat.jwt.JwtSecurityConfig;
//import com.example.websocketchat.jwt.TokenProvider;
import com.kosta268.eco_connect.jwt.JwtAccessDeniedHandler;
import com.kosta268.eco_connect.jwt.JwtAuthenticationEntryPoint;
import com.kosta268.eco_connect.jwt.JwtSecurityConfig;
import com.kosta268.eco_connect.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity // 기본적인 Web 보안을 활성화
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final TokenProvider tokenProvider;
    private final CorsFilter corsFilter;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    @Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
            .exceptionHandling(exceptionHandling -> exceptionHandling
                    .accessDeniedHandler(jwtAccessDeniedHandler)
                    .authenticationEntryPoint(jwtAuthenticationEntryPoint)
            )
            .authorizeHttpRequests(authorizeHttpRequests -> authorizeHttpRequests
//                            .requestMatchers("/api/auth/**").permitAll()   // API 인증 불필요
//                                         .anyRequest().authenticated());   // API 인증 필요
                .anyRequest().permitAll() //데이터 요청에 대한 모든 권한
            )
            .formLogin(Customizer.withDefaults())
            .httpBasic(Customizer.withDefaults())
            .sessionManagement(sessionManagement -> sessionManagement
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .with(new JwtSecurityConfig(tokenProvider), customizer -> {});
        return http.build();
    }
}
