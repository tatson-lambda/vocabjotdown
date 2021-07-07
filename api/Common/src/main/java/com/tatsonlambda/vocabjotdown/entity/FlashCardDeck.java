package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.Date;

@Data
public class FlashCardDeck {
    private long id;
    private long profileId;
    private Date createTime;
    private Date lastUpdateTime;
    private String status;
}
