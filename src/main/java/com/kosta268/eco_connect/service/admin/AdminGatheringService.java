package com.example.lastweb.service.admin;

import com.example.lastweb.Repository.admin.AdminGatheringRepository;
import com.example.lastweb.entity.admin.AdminGathering;
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
public class AdminGatheringService {
  @Autowired
  private AdminGatheringRepository adminGatheringRepository;

  public AdminGathering createGathering(@RequestBody AdminGathering adminGathering) {
    return adminGatheringRepository.save(adminGathering);
  }

  public List<AdminGathering> listAllGathering() {
    return adminGatheringRepository.findAll();
  }
  public ResponseEntity<AdminGathering> getGatheringById(@PathVariable Integer gathering_id) {
    AdminGathering adminGathering = adminGatheringRepository.findById(gathering_id)
        .orElseThrow(() -> new ResourceNotFoundException("Mission not exist with id : " + gathering_id));

    return ResponseEntity.ok(adminGathering);
  }

  public ResponseEntity<AdminGathering> updateGathering(@PathVariable Integer gathering_id, @RequestBody AdminGathering adminGatheringDetail) {
    AdminGathering adminGathering = adminGatheringRepository.findById(gathering_id)
        .orElseThrow(() -> new ResourceNotFoundException("Mission not exist with id : " + gathering_id));

    adminGathering.setTitle(adminGatheringDetail.getTitle());
    adminGathering.setContent(adminGatheringDetail.getContent());
    adminGathering.setStatus(adminGatheringDetail.isStatus());
    adminGathering.setCapacity(adminGatheringDetail.getCapacity());
    adminGathering.setImage(adminGatheringDetail.getImage());

    AdminGathering updateGathering = adminGatheringRepository.save(adminGathering);
    return ResponseEntity.ok(updateGathering);
  }

  public ResponseEntity<Map<String , Boolean>> deleteGathering(@PathVariable Integer gathering_id) {
    AdminGathering adminGathering = adminGatheringRepository.findById(gathering_id)
        .orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + gathering_id));

    adminGatheringRepository.delete(adminGathering);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }


}
