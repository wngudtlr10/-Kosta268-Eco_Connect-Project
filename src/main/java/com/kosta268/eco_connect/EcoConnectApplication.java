package com.kosta268.eco_connect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
// 스케줄링
@EnableScheduling
public class EcoConnectApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcoConnectApplication.class, args);
    }
    @GetMapping(value="/home")
    public String Hello() {
        return "Hello World";
    }
}
