package com.kosta268.eco_connect.repository.member;

import com.kosta268.eco_connect.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface MemberRepository extends JpaRepository<Member, Long> {

}
