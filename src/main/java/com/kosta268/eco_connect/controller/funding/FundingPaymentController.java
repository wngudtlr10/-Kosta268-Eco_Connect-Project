package com.kosta268.eco_connect.controller.funding;

import com.kosta268.eco_connect.service.funding.FundingPaymentService;
import com.siot.IamportRestClient.IamportClient;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.IamportResponse;
import com.siot.IamportRestClient.response.Payment;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
@RequestMapping("api/fundingPayment")
public class FundingPaymentController {

//    private IamportClient iamportClient;
//
//    @Value("${iamport.api.key}")
//    private String apiKey;
//
//    @Value("${iamport.api.secretkey}")
//    private String secretKey;
//
//    @PostConstruct
//    public void init() {
//        this.iamportClient = new IamportClient(apiKey, secretKey);
//    }


}
