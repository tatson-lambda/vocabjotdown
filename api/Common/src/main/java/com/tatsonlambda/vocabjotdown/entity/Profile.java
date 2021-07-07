package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Profile {
    private int id;
    private int userId;
    private int languageId;
    private String level;
    private String status;
    private Date lastUpdateTime;

}
