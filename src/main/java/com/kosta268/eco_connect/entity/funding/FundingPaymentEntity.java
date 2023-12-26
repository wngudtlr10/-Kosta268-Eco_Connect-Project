package com.kosta268.eco_connect.entity.funding;


import com.kosta268.eco_connect.constant.PaymentStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDateTime;

@Entity
@Table(name="fundingPayment")
@Getter
@Setter
@ToString
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class FundingPaymentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long paymentId; //결제 번호
    @Column
    private int totalPrice; //총 금액
    @Column
    private LocalDateTime createAt; // 결제 시각
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus; // 결제 상태

}
