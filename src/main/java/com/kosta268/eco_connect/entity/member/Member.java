package com.kosta268.eco_connect.entity.member;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@ToString
public class Member {

    @Id
    private Long member_id;
    private String id;
    private String name;
    private String email;
    private String profile;
    private String address;
    private LocalDateTime created_in;

}
