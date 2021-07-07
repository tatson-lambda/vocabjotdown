package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.Date;

@Data
public class UserActivity {
    private long id;
    private long userId;
    private String type;
    private String message;
    private Date actionTime;
}
