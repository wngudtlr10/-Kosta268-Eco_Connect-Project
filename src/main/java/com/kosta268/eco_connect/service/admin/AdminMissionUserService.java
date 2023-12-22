package com.example.lastweb.service.admin;

import com.example.lastweb.Repository.admin.AdminMissionUserRepository;
import com.example.lastweb.entity.admin.AdminMissionUser;
import com.example.lastweb.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminMissionUserService {
  @Autowired
  private AdminMissionUserRepository adminMissionUserRepository;

  public AdminMissionUser createMissionUser(@RequestBody AdminMissionUser adminMissionUser) {
    return adminMissionUserRepository.save(adminMissionUser);
  }

  public List<AdminMissionUser> listAllMissionUser() {
    return adminMissionUserRepository.findAll();
  }
  public ResponseEntity<AdminMissionUser> getMissionUserById(@PathVariable Integer mu_id) {
    AdminMissionUser adminMissionUser = adminMissionUserRepository.findById(mu_id)
        .orElseThrow(() -> new ResourceNotFoundException("Mission not exist with id : " + mu_id));

    return ResponseEntity.ok(adminMissionUser);
  }

  public ResponseEntity<AdminMissionUser> updateMissionUser(@PathVariable Integer mu_id, @RequestBody AdminMissionUser adminMissionUserDetail) {
    AdminMissionUser adminMissionUser = adminMissionUserRepository.findById(mu_id)
        .orElseThrow(() -> new ResourceNotFoundException("Mission not exist with id : " + mu_id));

    adminMissionUser.setStatus(adminMissionUserDetail.getStatus());

    AdminMissionUser updateMissionUser = adminMissionUserRepository.save(adminMissionUser);
    return ResponseEntity.ok(updateMissionUser);
  }

  public ResponseEntity<Map<String , Boolean>> deleteMissionUser(@PathVariable Integer mu_id) {
    AdminMissionUser adminMissionUser = adminMissionUserRepository.findById(mu_id)
        .orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + mu_id));

    adminMissionUserRepository.delete(adminMissionUser);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }


}
