package com.example.lastweb.Repository.admin;

import com.example.lastweb.entity.admin.Faq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaqRepository extends JpaRepository <Faq, Integer> {

}
