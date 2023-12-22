package com.example.lastweb.Repository.admin;

import com.example.lastweb.entity.admin.AdminGathering;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminGatheringRepository extends JpaRepository<AdminGathering, Integer> {

}