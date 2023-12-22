package com.example.lastweb.controller.admin;

import com.example.lastweb.entity.admin.AdminMissionUser;
import com.example.lastweb.service.admin.AdminMissionUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AdminMissionUserController {
  @Autowired
  private AdminMissionUserService adminMissionUserService;

  @PostMapping("/mission/user")
  public AdminMissionUser createMissionUser(@RequestBody AdminMissionUser adminMissionUser) {
    return adminMissionUserService.createMissionUser(adminMissionUser);
  }

  @GetMapping("/mission/user")
  public List<AdminMissionUser> listAllMissionUser() {
    return adminMissionUserService.listAllMissionUser();
  }

  @GetMapping("/mission/user/{mu_id}")
  public ResponseEntity<AdminMissionUser> getMissionUserById(@PathVariable Integer mu_id) {
    return adminMissionUserService.getMissionUserById(mu_id);
  }

  @PutMapping("/mission/user/{mu_id}")
  public ResponseEntity<AdminMissionUser> updateMissionUser(
      @PathVariable Integer mu_id, @RequestBody AdminMissionUser adminMissionUserDetail) {
    return adminMissionUserService.updateMissionUser(mu_id, adminMissionUserDetail);
  }

  @DeleteMapping("/mission/user/{mu_id}")
  public ResponseEntity<Map<String , Boolean>> deleteMissionUser(@PathVariable Integer mu_id) {
    return adminMissionUserService.deleteMissionUser(mu_id);
  }

}
