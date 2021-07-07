package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class Article {
    private int id;
    private int profileId;
    private String title;
    private String content;
    private String status;
    private Date createTime;
    private Date lastUpdateTime;
}
