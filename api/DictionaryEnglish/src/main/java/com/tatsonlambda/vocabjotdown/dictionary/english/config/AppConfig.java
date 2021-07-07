package com.tatsonlambda.vocabjotdown.dictionary.english.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "minidict.service.dictionary.en")
public class AppConfig {
    private String wordNetPath;

    public String getWordNetPath() {
        return wordNetPath;
    }

    public void setWordNetPath(String wordNetPath) {
        this.wordNetPath = wordNetPath;
    }
}
