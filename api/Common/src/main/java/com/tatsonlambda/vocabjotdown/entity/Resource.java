package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Resource {
    private int id;
    private int languageId;
    private String name;
    private Date createTime;
    private Date lastUpdateTime;
}
