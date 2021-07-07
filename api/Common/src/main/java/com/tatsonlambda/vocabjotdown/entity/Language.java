package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Language {
    private int id;
    private String name;
    private String code;
    private Date createTime;
    private Date lastUpdateTime;
}
