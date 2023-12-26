package com.kosta268.eco_connect.controller.member;

import com.kosta268.eco_connect.security.CustomUserDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/test")
public class TestController {
    @PostMapping("/one")
    public String testOne(@RequestBody Map<String, String> data) {
        return data.get("data");
    }

    @PostMapping("/two")
    public void testTwo(@RequestBody Map<String, String> data,
                       @AuthenticationPrincipal CustomUserDetails userDetails) {
        log.warn("member :{}", userDetails.getMemberId());
    }
}
