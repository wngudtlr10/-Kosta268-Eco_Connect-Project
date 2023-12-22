package com.example.lastweb.entity.admin;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdminMission {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer mission_id;

  @Column(name = "title")
  private String title;

  @Column(name = "content")
  private String content;

  @Column(name = "created_at")
  private String created_at;

  @Column(name = "modify_at")
  private String modify_at;

  @Column(name = "point")
  private Integer point;

  @Column(name = "status")
  private Integer status;

  @Column(name = "image")
  private String image;

  @Column(name = "start")
  private LocalDateTime start;

  @Column(name = "end")
  private LocalDateTime end;

}
