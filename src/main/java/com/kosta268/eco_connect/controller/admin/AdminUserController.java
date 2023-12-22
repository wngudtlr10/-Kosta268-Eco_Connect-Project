package com.example.lastweb.controller.admin;

import com.example.lastweb.entity.admin.AdminUsers;
import com.example.lastweb.service.admin.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class AdminUserController {
  @Autowired
  private AdminUserService adminUserService;

  @PostMapping("/users")
  public AdminUsers createUser(@RequestBody AdminUsers adminUsers) {
    return adminUserService.createUser(adminUsers);
  }

  @GetMapping("/users")
  public List<AdminUsers> listAllUsers() {
    return adminUserService.listAllUsers();
  }

  @GetMapping("/users/{user_id}")
  public ResponseEntity<AdminUsers> getUserById(@PathVariable Integer user_id) {
    return adminUserService.getUserById(user_id);
  }

  @PutMapping("/users/{user_id}")
  public ResponseEntity<AdminUsers> updateUser(
      @PathVariable Integer user_id, @RequestBody AdminUsers adminUsersDetail) {
    return adminUserService.updateUser(user_id, adminUsersDetail);
  }

  @DeleteMapping("/users/{user_id}")
  public ResponseEntity<Map<String , Boolean>> deleteUser(@PathVariable Integer user_id) {
    return adminUserService.deleteUser(user_id);
  }

}
