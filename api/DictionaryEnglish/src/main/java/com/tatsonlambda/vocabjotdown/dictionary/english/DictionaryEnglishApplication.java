package com.tatsonlambda.vocabjotdown.dictionary.english;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("com.tatsonlambda.vocabjotdown.data")
@SpringBootApplication
public class DictionaryEnglishApplication {

    public static void main(String[] args) {
        SpringApplication.run(DictionaryEnglishApplication.class, args);
    }

}
