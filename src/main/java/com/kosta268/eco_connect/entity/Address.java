package com.kosta268.eco_connect.entity;

import jakarta.persistence.Embeddable;
import lombok.Getter;

@Embeddable
@Getter
public class Address {

    private String zoneCode;
    private String fullAddress;
    private String subAddress;

    protected Address() {}

    public Address(String zoneCode, String fullAddress, String subAddress) {
        this.zoneCode = zoneCode;
        this.fullAddress = fullAddress;
        this.subAddress = subAddress;
    }
}
