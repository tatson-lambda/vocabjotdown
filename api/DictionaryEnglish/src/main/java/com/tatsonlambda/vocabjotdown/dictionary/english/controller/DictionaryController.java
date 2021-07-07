package com.tatsonlambda.vocabjotdown.dictionary.english.controller;

import com.tatsonlambda.vocabjotdown.dictionary.english.service.DictionaryService;
import com.tatsonlambda.vocabjotdown.entity.Word;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8083")
@RestController
@RequestMapping("/api/v1/")
public class DictionaryController {

    @Autowired
    DictionaryService service;

    @GetMapping("/lookup/{query}")
    public List<Word> lookupWord(@PathVariable("query") String query) {
        return service.lookupWord(query);
    }

    @GetMapping("/suggestion/{query}")
    public List<String> autoCompleteSuggestion(@PathVariable("query") String query) {
        return service.autoCompleteSuggestion(query);
    }
}
