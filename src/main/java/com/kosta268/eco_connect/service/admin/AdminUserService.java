package com.example.lastweb.service.admin;

import com.example.lastweb.Repository.admin.AdminUserRepository;
import com.example.lastweb.entity.admin.AdminUsers;
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
public class AdminUserService {
  @Autowired
  private AdminUserRepository adminUserRepository;

  public AdminUsers createUser(@RequestBody AdminUsers adminUsers) {
    return adminUserRepository.save(adminUsers);
  }

  public List<AdminUsers> listAllUsers() {
    return adminUserRepository.findAll();
  }
public ResponseEntity<AdminUsers> getUserById(@PathVariable Integer user_id) {
  AdminUsers adminUsers = adminUserRepository.findById(user_id)
      .orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + user_id));

  return ResponseEntity.ok(adminUsers);
}

public ResponseEntity<AdminUsers> updateUser(@PathVariable Integer user_id, @RequestBody AdminUsers adminUsersDetails) {
  AdminUsers adminUsers = adminUserRepository.findById(user_id)
      .orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + user_id));

  adminUsers.setName(adminUsersDetails.getName());
  adminUsers.setIsadmin(adminUsersDetails.isIsadmin());
  adminUsers.setEmail(adminUsersDetails.getEmail());
  adminUsers.setAddress(adminUsersDetails.getAddress());
  adminUsers.setProfile(adminUsersDetails.getProfile());

  AdminUsers updateUser = adminUserRepository.save(adminUsers);
  return ResponseEntity.ok(updateUser);
}

public ResponseEntity<Map<String , Boolean>> deleteUser(@PathVariable Integer user_id) {
  AdminUsers adminUsers = adminUserRepository.findById(user_id)
      .orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + user_id));

  adminUserRepository.delete(adminUsers);
  Map<String, Boolean> response = new HashMap<>();
  response.put("deleted", Boolean.TRUE);
  return ResponseEntity.ok(response);
}


}
