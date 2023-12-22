package com.example.lastweb.entity.admin;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminUsers {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer user_id;

  @Column(name = "name")
  private String name;

  @Column(name = "id")
  private String id;

  @Column(name = "password")
  private String password;

  @Column(name = "email")
  private String email;

  @Column(name = "address")
  private String address;

  @Column(name = "isadmin")
  private boolean isadmin;

  @Column(name = "profile")
  private String  profile;

  @Column(name = "created_at")
  private String   created_at;


}
