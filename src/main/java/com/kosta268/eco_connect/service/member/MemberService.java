package com.kosta268.eco_connect.service;

import com.kosta268.eco_connect.entity.Member;
import com.kosta268.eco_connect.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;
    public void createUser(Member member) {
        memberRepository.save(member);
    }
}
