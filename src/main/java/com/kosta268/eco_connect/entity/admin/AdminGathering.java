package com.example.lastweb.entity.admin;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminGathering {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer gathering_id;

  @Column(name = "title")
  private String title;

  @Column(name = "content")
  private String content;

  @Column(name = "created_at")
  private String created_at;

  @Column(name = "status")
  private boolean status;

  @Column(name = "capacity")
  private Integer capacity;

  @Column(name = "image")
  private String  image;


}
