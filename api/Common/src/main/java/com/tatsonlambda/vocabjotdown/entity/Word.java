package com.tatsonlambda.vocabjotdown.entity;

import lombok.Data;

import java.util.List;

@Data
public class Word {
    private long wordId;
    private String word;
    private List<String> definition;
    private String lang;
}
