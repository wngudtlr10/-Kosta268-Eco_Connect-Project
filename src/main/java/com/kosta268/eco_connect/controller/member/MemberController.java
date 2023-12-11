package com.kosta268.eco_connect.controller;

import com.kosta268.eco_connect.dto.MemberDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api")
@RequiredArgsConstructor
@Slf4j
public class MemberController {

    @GetMapping(value="/members")
    public MemberDto member(){
        System.out.println("MemberApiController진입");
        MemberDto memberDto = new MemberDto();
        memberDto.setId("member");
        memberDto.setName("member");
        memberDto.setEmail("member@kosta268.eco_connect");
        memberDto.setAddress("경기도 성남시 분당구 오리역");
        memberDto.setProfile("image upload");

        return memberDto;
    }
}
