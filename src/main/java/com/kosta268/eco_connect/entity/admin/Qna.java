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
public class Qna {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer qna_id;

  @Column(name = "title")
  private String title;

  @Column(name = "content")
  private String content;

  @Column(name = "content2")
  private String content2;

  @Column(name = "created_at")
  private String   created_at;

  @Column(name = "modify_at")
  private String   modify_at;

  @Column(name = "status")
  private Integer status;

  @Column(name = "category")
  private Integer category;




}
