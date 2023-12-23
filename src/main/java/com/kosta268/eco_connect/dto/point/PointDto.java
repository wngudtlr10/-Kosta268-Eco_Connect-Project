package com.kosta268.eco_connect.dto.point;

import com.kosta268.eco_connect.entity.point.Point;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class PointDto {

    private int holding;
    private int total;

    public Point toEntity() {
        Point point = new Point();
        point.setHolding(holding);
        point.setTotal(total);
        return point;
    }

    public static PointDto fromEntity(Point point) {
        return PointDto.builder()
                .holding(point.getHolding())
                .total(point.getTotal())
                .build();
    }
}
