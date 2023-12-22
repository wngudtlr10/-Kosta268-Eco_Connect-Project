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
public class AdminMissionUser {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer mu_id;

  @Column(name = "title")
  private String title;

  @Column(name = "content")
  private String content;

  @Column(name = "submit_at")
  private String submit_at;

  @Column(name = "status")
  private Integer status;

  @Column(name = "image")
  private String image;

  @Column(name = "user")
  private  String user;

}
