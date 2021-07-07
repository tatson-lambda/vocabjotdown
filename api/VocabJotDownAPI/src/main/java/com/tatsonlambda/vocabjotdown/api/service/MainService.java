package com.tatsonlambda.vocabjotdown.api.service;

import com.tatsonlambda.vocabjotdown.Constant;
import com.tatsonlambda.vocabjotdown.data.StudyMapper;
import com.tatsonlambda.vocabjotdown.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@Service
public class MainService {

    private static Map<String, String> typeMap;

    static{
        typeMap = new HashMap<String, String>();
        typeMap.put("DELETED", Constant.PROGRESS_DELETE);
        typeMap.put("LEARNING", Constant.PROGRESS_LEARNING);
        typeMap.put("COMPLETED", Constant.PROGRESS_COMPLETED);
    }

    @Autowired
    StudyMapper studyMapper;


    public List<Language> getLanguageList(){
        return studyMapper.getLanguageList();
    }

    public List<Profile> getProfileByUserId(int userId){
        return studyMapper.getProfileByUserId(userId);
    }

    public Profile getProfile(int id){
        Profile p = studyMapper.getProfile(id);
        return p;
    }

    public Profile getProfileByUserIdAndLanguage(int userId, String lang){
        Profile p = studyMapper.getProfileByUserIdAndLanguageCode(userId, lang);
        return p;
    }

    public Profile createProfile(int userId, String langCode){
        Language l = studyMapper.getLanguageByCode(langCode);
        if(l == null) return null;

        Profile p = new Profile();
        p.setUserId(userId);
        p.setLanguageId(l.getId());
        p.setStatus(Constant.STATUS_ACTIVE);
        p.setLevel(Constant.EN_LEVEL_UNK);

        studyMapper.createProfile(p);

        return p;
    }

    public List<Resource> getResourcesByLanguageCode(String code){
        List<Resource> list = studyMapper.getResourceByLanguageCode(code);
        return list;
    }

    public Resource getResourceById(int id){
        Resource r = studyMapper.getResourceByResourceId(id);
        return r;
    }

    public List<Vocabulary> getUserVocabList(int userId, String lang, String type){
        Profile p = studyMapper.getProfileByUserIdAndLanguageCode(userId, lang);
        if(p == null) return null;

        List<String> typeList;
        type = type.toUpperCase().trim();
        if(type.compareTo("all") == 0)
            typeList = List.of(Constant.PROGRESS_DELETE, Constant.PROGRESS_COMPLETED, Constant.PROGRESS_LEARNING);
        else if(typeMap.containsKey(type))
            typeList = List.of(typeMap.get(type));
        else
            return null;

        return studyMapper.getVocabularyByProfileIdAndProgress(p.getId(), typeList);
    }

    public boolean checkProfileUnderUser(int profileId, int userId){
        Profile p = studyMapper.getProfile(profileId);
        if(p == null) return false;
        return p.getUserId() == userId;
    }

    public Vocabulary addVocab(Vocabulary newVocab){
        newVocab.setProgress(Constant.PROGRESS_LEARNING);
        studyMapper.addVocabulary(newVocab);
        return newVocab;
    }

    public Vocabulary updateVocab(Vocabulary updateVocab){
        studyMapper.updateVocabulary(updateVocab);
        return updateVocab;
    }

    public List<Article> getUserArticles(int userId, String lang){
        Profile p = studyMapper.getProfileByUserIdAndLanguageCode(userId, lang);
        if(p == null) return null;

        return studyMapper.getArticlesByProfileId(p.getId(), 0);
    }

    public Article getArticle(int userId, int articleId){
        Article a = studyMapper.getArticleById(articleId);
        if(checkProfileUnderUser(a.getProfileId(), userId)) return a;
        else return null;
    }

    public Article addArticle(int userId, Article newArticle){
        if(checkProfileUnderUser(newArticle.getProfileId(), userId)) return null;
        studyMapper.createArticle(newArticle);

        return newArticle;
    }

    public Article updateArticle(int userId, Article updateArticle){
        if(checkProfileUnderUser(updateArticle.getProfileId(), userId)) return null;
        studyMapper.updateArticle(updateArticle);

        return updateArticle;
    }

    public boolean deleteArticle(int userId, int deleteId){
        Article toBeDel = studyMapper.getArticleById(deleteId);
        if(toBeDel == null || checkProfileUnderUser(toBeDel.getProfileId(), userId)) return false;
        studyMapper.deleteArticleById(deleteId);
        return true;
    }

}
