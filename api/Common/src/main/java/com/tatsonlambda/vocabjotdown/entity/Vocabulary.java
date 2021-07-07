package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.Date;

@Data
public class Vocabulary {
    private int id;
    private int profileId;
    private String word;
    private String progress;
    private Date lastUpdateTime;
}
