package com.example.lastweb.controller.admin;


import com.example.lastweb.entity.admin.AdminPunding;
import com.example.lastweb.service.admin.AdminPundingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AdminPundingController {
  @Autowired
  private AdminPundingService adminPundingService;

  @PostMapping("/punding")
  public AdminPunding createPunding(@RequestBody AdminPunding adminPunding) {
    return adminPundingService.createPunding(adminPunding);
  }

  @GetMapping("/punding") // Changed from "/mission" to "/punding"
  public List<AdminPunding> listAllPunding() { // Changed from "listAllMission" to "listAllPunding"
    return adminPundingService.listAllPunding(); // Changed from "listAllMission" to "listAllPunding"
  }

  @GetMapping("/punding/{punding_id}") // Changed from "/mission/{mission_id}" to "/punding/{punding_id}"
  public ResponseEntity<AdminPunding> getPundingById(@PathVariable Integer punding_id) { // Changed from "getMissionById" to "getPundingById"
    return adminPundingService.getPundingById(punding_id); // Changed from "getMissionById" to "getPundingById"
  }

  @PutMapping("/punding/{punding_id}")
  public ResponseEntity<AdminPunding> updatePunding( // Changed from "updateMission" to "updatePunding"
                                                     @PathVariable Integer punding_id, @RequestBody AdminPunding adminPundingDetail) { // Changed from "adminMissionDetail" to "adminPundingDetail"
    return adminPundingService.updatePunding(punding_id, adminPundingDetail); // Changed from "updateMission" to "updatePunding"
  }

  @DeleteMapping("/punding/{punding_id}") // Changed from "/mission/{mission_id}" to "/punding/{punding_id}"
  public ResponseEntity<Map<String, Boolean>> deletePunding(@PathVariable Integer punding_id) { // Changed from "deleteMission" to "deletePunding"
    return adminPundingService.deletePunding(punding_id); // Changed from "deleteMission" to "deletePunding"
  }
}
