package com.kosta268.eco_connect.entity.funding;

import com.kosta268.eco_connect.constant.DeliveryStatus;
import com.kosta268.eco_connect.constant.ItemSellStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name="fundingDelivery")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class FundingDeliveryEntity {

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

    @Builder
    public FundingDeliveryEntity(Long delivery_id, String recipientName, String recipientPhone, String zoneCode, String fullAddress, String subAddress, DeliveryStatus deliveryStatus) {
        this.delivery_id = delivery_id;
        this.recipientName = recipientName;
        this.recipientPhone = recipientPhone;
        this.zoneCode = zoneCode;
        this.fullAddress = fullAddress;
        this.subAddress = subAddress;
        this.deliveryStatus = deliveryStatus;
    }

//    DeliveryEntity deliveryEntity = DeliveryEntity.builder()
//            .delivery_id(1L)
//            .recipientName("John Doe")
//            .recipientPhone("1234567890")
//            .zoneCode("12345")
//            .fullAddress("123 Fake St")
//            .subAddress("Apt 4")
//            .deliveryStatus(DeliveryStatus.AWAITING_SHIPMENT)
//            .build();

}
