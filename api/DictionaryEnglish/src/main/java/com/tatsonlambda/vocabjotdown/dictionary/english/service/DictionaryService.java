package com.tatsonlambda.vocabjotdown.dictionary.english.service;

import com.tatsonlambda.vocabjotdown.dictionary.english.bean.WordNetBean;
import com.tatsonlambda.vocabjotdown.entity.Word;
import net.sf.extjwnl.data.IndexWord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DictionaryService {

    @Autowired
    WordNetBean wordNetBean;

    public List<Word> lookupWord(String query) {
        try {
            IndexWord[] result = wordNetBean.lookupWord(query);

            ArrayList<com.tatsonlambda.vocabjotdown.entity.Word> returnVal = new ArrayList<>();

            for (int i = 0; i < result.length; i++) {
                com.tatsonlambda.vocabjotdown.entity.Word w = new com.tatsonlambda.vocabjotdown.entity.Word();
                w.setWord(result[i].getLemma());
                var senses = result[i].getSenses();
                java.util.List<String> definition = new ArrayList<String>();
                for (int j = 0; j < senses.size(); j++) {
                    definition.add(senses.get(j).getGloss());
                }
                w.setDefinition(definition);
                w.setLang("en");
                returnVal.add(w);
            }

            return returnVal;
        }
        catch(Exception ex){
            return null;
        }
    }

    public List<String> autoCompleteSuggestion(String query) {
        return null;
    }
}
