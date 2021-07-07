package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.Date;

@Data
public class User {
    //serialized field
    private int id;
    private String loginName;
    private String commonName;
    private String email;
    private String status;
    private String passwordHash;
    private Date lastUpdateTime;
}
