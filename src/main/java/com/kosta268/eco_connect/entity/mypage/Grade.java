package com.kosta268.eco_connect.entity.mypage;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Grade {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "grade_id", nullable = false)
  private Long gradeId;

  @Column(name = "name", length = 5, nullable = false)
  private String name;

  @Column(name = "required")
  private int required;
}
