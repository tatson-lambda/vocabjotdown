package com.tatsonlambda.vocabjotdown.api.service;

import com.tatsonlambda.vocabjotdown.entity.Word;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class DictionaryService {

    @Value( "${vocabjotdown.dictionary-en-service}" )
    private String enService;

    @Value( "${vocabjotdown.dictionary-jp-service}" )
    private String jpService;

    private String getDictionaryUrl(String lang){
        if(lang.compareTo("en") == 0) return enService;
        else if(lang.compareTo("jp") == 0) return jpService;
        else return null;
    }

    public List<Word> lookup(String lang, String word) {
        String host = getDictionaryUrl(lang);

        if(host == null) return null;
        String uri = host + "/api/v1/lookup/" + word;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<Word>> response = restTemplate.exchange(
                uri, HttpMethod.GET, null,
                new ParameterizedTypeReference<List<Word>>(){});

        List<Word> result = response.getBody();
        return result;
    }

    public List<String> autocomplete(String lang, String word){
        String host = getDictionaryUrl(lang);

        if(host == null) return null;
        String uri = host + "/api/v1/suggestion/" + word;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<String>> response = restTemplate.exchange(
                uri, HttpMethod.GET, null,
                new ParameterizedTypeReference<List<String>>(){});

        List<String> result = response.getBody();
        return result;
    }

}
