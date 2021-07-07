package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.Date;

@Data
public class FlashCard {
    private int id;
    private int deckId;
    private Date lastStudy;
    private int response;
    private Date createTime;
    private String status;
}
