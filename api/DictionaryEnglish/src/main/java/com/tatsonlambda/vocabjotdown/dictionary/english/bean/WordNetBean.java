package com.tatsonlambda.vocabjotdown.dictionary.english.bean;

import com.tatsonlambda.vocabjotdown.dictionary.english.config.AppConfig;
import net.sf.extjwnl.JWNLException;
import net.sf.extjwnl.data.IndexWord;
import net.sf.extjwnl.data.IndexWordSet;
import net.sf.extjwnl.dictionary.Dictionary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class WordNetBean {

    private Dictionary dictionary;

    @Autowired
    public WordNetBean(AppConfig appConfig) throws JWNLException {
        if(!(appConfig.getWordNetPath() == null || appConfig.getWordNetPath().isEmpty()))
            initWordNet(appConfig.getWordNetPath());
        else
            initWordNet();
    }

    public void initWordNet() throws JWNLException {
        dictionary = Dictionary.getDefaultResourceInstance();
    }

    public void initWordNet(String dictPath) throws JWNLException {
        dictionary = Dictionary.getDatabaseBackedInstance(dictPath);
    }

    public IndexWord[] lookupWord(String word) throws JWNLException {
        IndexWordSet wordSet = dictionary.lookupAllIndexWords(word);
        IndexWord[] wordArray = wordSet.getIndexWordArray();

        return wordArray;
    }
}
