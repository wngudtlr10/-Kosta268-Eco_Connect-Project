package com.example.lastweb.controller.admin;


import com.example.lastweb.entity.admin.AdminGathering;
import com.example.lastweb.service.admin.AdminGatheringService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AdminGatheringController {
  @Autowired
  private AdminGatheringService adminGatheringService;

  @PostMapping("/gathering")
  public AdminGathering createGathering(@RequestBody AdminGathering adminGathering) {
    return adminGatheringService.createGathering(adminGathering);
  }

  @GetMapping("/gathering")
  public List<AdminGathering> listAllGathering() {
    return adminGatheringService.listAllGathering();
  }

  @GetMapping("/gathering/{gathering_id}")
  public ResponseEntity<AdminGathering> getGatheringById(@PathVariable Integer gathering_id) {
    return adminGatheringService.getGatheringById(gathering_id);
  }

  @PutMapping("/gathering/{gathering_id}")
  public ResponseEntity<AdminGathering> updateGathering(
      @PathVariable Integer gathering_id, @RequestBody AdminGathering adminGatheringDetail) {
    return adminGatheringService.updateGathering(gathering_id, adminGatheringDetail);
  }

  @DeleteMapping("/gathering/{gathering_id}")
  public ResponseEntity<Map<String , Boolean>> deleteGathering(@PathVariable Integer gathering_id) {
    return adminGatheringService.deleteGathering(gathering_id);
  }

}
