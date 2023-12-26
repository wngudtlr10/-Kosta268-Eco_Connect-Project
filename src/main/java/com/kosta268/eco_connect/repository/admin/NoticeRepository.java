package com.kosta268.eco_connect.repository.admin;


import com.kosta268.eco_connect.entity.admin.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Integer> {

}
