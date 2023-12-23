package com.kosta268.eco_connect.entity.point;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pointId;

    private int holding = 0; // 현재 보유 포인트
    private int total = 0; // 획득한 총 포인트

    public void increasePoint(int point) {
        this.holding += point;
        this.total += point;
    }

    public Point() {

    }

    public Point(int holding, int total) {
        this.holding = holding;
        this.total = total;
    }
}

