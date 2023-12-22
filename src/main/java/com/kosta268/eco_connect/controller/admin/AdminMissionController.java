package com.example.lastweb.controller.admin;

import com.example.lastweb.entity.admin.AdminMission;
import com.example.lastweb.service.admin.AdminMissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AdminMissionController {
  @Autowired
  private AdminMissionService adminMissionService;

  @PostMapping("/mission")
  public AdminMission createMission(@RequestBody AdminMission adminMission) {
    return adminMissionService.createMission(adminMission);
  }

  @GetMapping("/mission")
  public List<AdminMission> listAllMission() {
    return adminMissionService.listAllMission();
  }

  @GetMapping("/mission/{mission_id}")
  public ResponseEntity<AdminMission> getMissionById(@PathVariable Integer mission_id) {
    return adminMissionService.getMissionById(mission_id);
  }

  @PutMapping("/mission/{mission_id}")
  public ResponseEntity<AdminMission> updateMission(
      @PathVariable Integer mission_id, @RequestBody AdminMission adminMissionDetail) {
    return adminMissionService.updateMission(mission_id, adminMissionDetail);
  }

  @DeleteMapping("/mission/{mission_id}")
  public ResponseEntity<Map<String , Boolean>> deleteMission(@PathVariable Integer mission_id) {
    return adminMissionService.deleteMission(mission_id);
  }

}
