package com.tatsonlambda.vocabjotdown.api.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "vocabjotdown")
@Data
public class AppConfig {

    private String dictionaryEnService;
    private String firebaseDatabaseUrl;
}
