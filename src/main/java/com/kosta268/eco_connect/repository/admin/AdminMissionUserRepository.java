package com.example.lastweb.Repository.admin;

import com.example.lastweb.entity.admin.AdminMissionUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminMissionUserRepository extends JpaRepository<AdminMissionUser, Integer> {

}