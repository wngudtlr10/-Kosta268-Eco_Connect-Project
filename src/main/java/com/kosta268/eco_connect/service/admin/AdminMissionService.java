package com.example.lastweb.service.admin;

import com.example.lastweb.Repository.admin.AdminMissionRepository;
import com.example.lastweb.entity.admin.AdminMission;
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
public class AdminMissionService {
  @Autowired
  private AdminMissionRepository adminMissionRepository;

  public AdminMission createMission(@RequestBody AdminMission adminMission) {
    return adminMissionRepository.save(adminMission);
  }

  public List<AdminMission> listAllMission() {
    return adminMissionRepository.findAll();
  }
  public ResponseEntity<AdminMission> getMissionById(@PathVariable Integer mission_id) {
    AdminMission adminMission = adminMissionRepository.findById(mission_id)
        .orElseThrow(() -> new ResourceNotFoundException("Mission not exist with id : " + mission_id));

    return ResponseEntity.ok(adminMission);
  }

  public ResponseEntity<AdminMission> updateMission(@PathVariable Integer mission_id, @RequestBody AdminMission adminMissionDetail) {
    AdminMission adminMission = adminMissionRepository.findById(mission_id)
        .orElseThrow(() -> new ResourceNotFoundException("Mission not exist with id : " + mission_id));

        adminMission.setTitle(adminMissionDetail.getTitle());
        adminMission.setContent(adminMissionDetail.getContent());
        adminMission.setPoint(adminMissionDetail.getPoint());
        adminMission.setModify_at(adminMissionDetail.getModify_at());
        adminMission.setImage(adminMissionDetail.getImage());
        adminMission.setStatus(adminMissionDetail.getStatus());
        adminMission.setStart(adminMissionDetail.getStart());
        adminMission.setEnd(adminMissionDetail.getEnd());

    AdminMission updateMission = adminMissionRepository.save(adminMission);
    return ResponseEntity.ok(updateMission);
  }

  public ResponseEntity<Map<String , Boolean>> deleteMission(@PathVariable Integer mission_id) {
    AdminMission adminMission = adminMissionRepository.findById(mission_id)
        .orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + mission_id));

    adminMissionRepository.delete(adminMission);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }


}
