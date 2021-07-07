package com.tatsonlambda.vocabjotdown.data;

import com.tatsonlambda.vocabjotdown.entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Mapper
@Service
public interface StudyMapper {

    List<Profile> getProfileByUserId(@Param("userId") int userId);

    Profile getProfileByUserIdAndLanguage(@Param("userId") int userId, @Param("languageId") int languageCode);

    Profile getProfileByUserIdAndLanguageCode(@Param("userId") int userId, @Param("code") String languageCode);

    Profile getProfile(@Param("profileId") int profileId);

    int updateProfile(Profile profile);

    int createProfile(Profile profile);

    List<Vocabulary> getVocabularyByProfileIdAndProgress(@Param("profileId") int profileId, @Param("progressList") List<String> progressList);

    int addVocabulary(Vocabulary vocab);

    int updateVocabulary(Vocabulary vocab);

    int deleteVocabulary(Vocabulary vocab);

    Article getArticleById(@Param("articleId") int articleId);

    List<Article> getArticlesById(@Param("articleIdList") List<Integer> articleIdList, @Param("textLimit") int textLimit);

    List<Article> getArticlesByProfileId(@Param("profileId") int profileId, @Param("textLimit") int textLimit);

    int deleteArticleById(@Param("articleId") int articleId);

    int createArticle(Article article);

    int updateArticle(Article article);

    FlashCardDeck getFlashCardDeckByDeckId(@Param("deckId") int deckId);

    List<FlashCardDeck> getFlashCardDeckByProfileId(@Param("profileId") int profileId);

    int createFlashCardDeck(FlashCardDeck deck);

    int updateFlashCardDeck(FlashCardDeck deck);

    int deleteFlashCardDeckById(@Param("deckId") int deckId);

    List<FlashCard> getFlashCardByDeckId(@Param("deckId") int deckId);

    int createFlashCard(FlashCard card);

    int updateFlashCard(FlashCard card);

    int deleteFlashCard(@Param("cardId") int cardId);

    List<Language> getLanguageList();

    Language getLanguageByCode(@Param("code") String code);

    List<Resource> getResourceByLanguageId(@Param("langId") int langId);

    List<Resource> getResourceByLanguageCode(@Param("code") String code);

    Resource getResourceByResourceId(@Param("resourceId") int resourceId);

    List<String> getWordByResourceId(@Param("resourceId") int resourceId);

    ArticleAnalysisResult analyseArticle(@Param("articleId") int articleId);
}
