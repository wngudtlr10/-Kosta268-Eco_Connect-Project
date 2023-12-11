package com.kosta268.eco_connect;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // your path pattern
                .allowedOrigins("*")   // allowed origins
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}
