package com.example.lastweb.Repository.admin;

import com.example.lastweb.entity.admin.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepository extends JpaRepository <Notice, Integer> {

}
