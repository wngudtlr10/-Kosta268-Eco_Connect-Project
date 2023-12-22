package com.example.lastweb.service.admin;

import com.example.lastweb.Repository.admin.AdminPundingRepository;
import com.example.lastweb.entity.admin.AdminPunding;
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
public class AdminPundingService {
  @Autowired
  private AdminPundingRepository adminPundingRepository;

  public AdminPunding createPunding(@RequestBody AdminPunding adminPunding) {
    return adminPundingRepository.save(adminPunding);
  }

  public List<AdminPunding> listAllPunding() { // Changed from "listAllMission" to "listAllPunding"
    return adminPundingRepository.findAll(); // Changed from "adminMissionRepository" to "adminPundingRepository"
  }

  public ResponseEntity<AdminPunding> getPundingById(@PathVariable Integer punding_id) { // Changed from "getMissionById" to "getPundingById"
    AdminPunding adminPunding = adminPundingRepository.findById(punding_id) // Changed from "adminMissionRepository" to "adminPundingRepository"
        .orElseThrow(() -> new ResourceNotFoundException("Punding not exist with id : " + punding_id));

    return ResponseEntity.ok(adminPunding);
  }

  public ResponseEntity<AdminPunding> updatePunding(@PathVariable Integer punding_id, @RequestBody AdminPunding adminPundingDetail) { // Changed from "updateMission" to "updatePunding"
    AdminPunding adminPunding = adminPundingRepository.findById(punding_id) // Changed from "adminMissionRepository" to "adminPundingRepository"
        .orElseThrow(() -> new ResourceNotFoundException("Punding not exist with id : " + punding_id));

    adminPunding.setTitle(adminPundingDetail.getTitle());
    adminPunding.setContent(adminPundingDetail.getContent());
    adminPunding.setImage(adminPundingDetail.getImage());
    adminPunding.setStart(adminPundingDetail.getStart());
    adminPunding.setEnd(adminPundingDetail.getEnd());
    adminPunding.setCategory(adminPundingDetail.getCategory());
    adminPunding.setColleting(adminPundingDetail.getColleting());
    adminPunding.setLikes(adminPundingDetail.getLikes());
    adminPunding.setImage2(adminPundingDetail.getImage2());
    adminPunding.setModified_at(adminPundingDetail.getModified_at());
    adminPunding.setStatus(adminPundingDetail.getStatus());

    AdminPunding updatePunding = adminPundingRepository.save(adminPunding);
    return ResponseEntity.ok(updatePunding);
  }

  public ResponseEntity<Map<String , Boolean>> deletePunding(@PathVariable Integer punding_id) { // Changed from "deleteMission" to "deletePunding"
    AdminPunding adminPunding = adminPundingRepository.findById(punding_id) // Changed from "adminMissionRepository" to "adminPundingRepository"
        .orElseThrow(() -> new ResourceNotFoundException("Punding not exist with id : " + punding_id));

    adminPundingRepository.delete(adminPunding);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }
}
