package com.tatsonlambda.vocabjotdown.dictionary.english.runner;

import com.tatsonlambda.vocabjotdown.dictionary.english.bean.WordNetBean;
import com.tatsonlambda.vocabjotdown.dictionary.english.config.AppConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class LoadDictionaryRunner implements CommandLineRunner  {

    @Autowired
    WordNetBean wordNetBean;

    @Override
    public void run(String... args) throws Exception {
        wordNetBean.initWordNet();
    }

}
