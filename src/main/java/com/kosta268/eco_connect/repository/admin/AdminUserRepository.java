package com.example.lastweb.Repository.admin;

import com.example.lastweb.entity.admin.AdminUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminUserRepository extends JpaRepository <AdminUsers, Integer> {

}
