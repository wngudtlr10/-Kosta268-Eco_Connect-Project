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
public class AdminPunding {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer punding_id;

  @Column(name = "title")
  private String title;

  @Column(name = "content")
  private String content;

  @Column(name = "start")
  private LocalDateTime start;

  @Column(name = "end")
  private LocalDateTime end;

  @Column(name = "likes")
  private Integer likes;

  @Column(name = "status")
  private Integer status;

  @Column(name = "image")
  private String image;

  @Column(name = "image2")
  private String image2;

  @Column(name = "category")
  private Integer category;

  @Column(name = "create_at")
  private String create_at;

  @Column(name = "modified_at")
  private String modified_at;

  @Column(name = "colleting")
  private Integer colleting;



}
