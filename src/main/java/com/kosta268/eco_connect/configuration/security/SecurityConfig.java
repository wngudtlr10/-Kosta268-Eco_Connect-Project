package com.example.websocketchat.config.security;

import com.example.websocketchat.jwt.JwtAccessDeniedHandler;
import com.example.websocketchat.jwt.JwtAuthenticationEntryPoint;
import com.example.websocketchat.jwt.JwtSecurityConfig;
import com.example.websocketchat.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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
//    private final CorsConfigurationSource corsConfigurationSource;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // token 사용 방식이므로 csrf -> disable
            .csrf(AbstractHttpConfigurer::disable)

//            .cors(cors -> cors.configurationSource((corsConfigurationSource)))

            .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
            // exception handling
            .exceptionHandling(exceptionHandling -> exceptionHandling
                .accessDeniedHandler(jwtAccessDeniedHandler)
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
            )


            // HttpServletRequest 를 사용하는 요청들에 대한 접근 제한을 설정
            .authorizeHttpRequests(authorizeHttpRequests -> authorizeHttpRequests
//                            .requestMatchers("/api/auth/**").permitAll()   // API 인증 불필요
//                                         .anyRequest().authenticated());   // API 인증 필요
                .anyRequest().permitAll()
            )

            // 스프링 시큐리티는 기본적으로 세션을 사용
            // 세션을 사용하지 않기 때문에 세션 설정을 Stateless로 설정
            .sessionManagement(sessionManagement -> sessionManagement
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )

            .with(new JwtSecurityConfig(tokenProvider), customizer -> {});

        return http.build();
    }

}
