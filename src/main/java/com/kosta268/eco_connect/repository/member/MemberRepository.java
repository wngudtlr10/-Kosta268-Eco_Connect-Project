package com.kosta268.eco_connect.repository.member;

import com.kosta268.eco_connect.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface MemberRepository extends JpaRepository<Member, Long> {
    boolean existsMemberById(String id);
    Optional<Member> findById(String id);
    boolean existsMemberByEmail(String email);
    Optional<Member> findByEmail(String email);
    boolean existsByIdAndEmail(String id, String email);
}
