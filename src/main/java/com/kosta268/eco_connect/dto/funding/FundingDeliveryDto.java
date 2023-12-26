package com.kosta268.eco_connect.dto.funding;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.kosta268.eco_connect.constant.DeliveryStatus;
import jakarta.persistence.*;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class FundingDeliveryDto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long delivery_id; //배송 아이디

    @Column
    private String recipientName; //받는 사람

    @Column
    private String recipientPhone; //전화번호

    @Column
    private String zoneCode; //우편번호

    @Column
    private String fullAddress; //주소지

    @Column
    private String subAddress; //세부 주소지

    @Enumerated(EnumType.STRING)
    private DeliveryStatus deliveryStatus;  //배송 상태


}
