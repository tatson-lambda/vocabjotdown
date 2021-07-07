package com.tatsonlambda.vocabjotdown.data;

import com.tatsonlambda.vocabjotdown.Constant;
import com.tatsonlambda.vocabjotdown.entity.*;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class LearnerTest {

    public SqlSessionFactory getSqlSessionFactory() throws IOException {
        // mybatis configuration file. The root address of this location is: resources. The path should be correct.
        String resource = "mybatis-test-config.xml";
        // Get profile stream
        InputStream inputStream = Resources.getResourceAsStream(resource);
        // Create a session factory and pass in the profile information of mybatis
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        return sqlSessionFactory;
    }

    User testUser;
    private User getTestUser(SqlSession sqlSession){
        if(testUser != null) return testUser;

        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        List<User> ulist = mapper.searchUser(null, List.of("javatest"), null);
        assert(ulist != null && ulist.size() > 0);
        testUser = ulist.get(0);
        return testUser;
    }

    List<Language> languages;
    private List<Language> getLanguages(SqlSession sqlSession){
        if(languages != null) return languages;

        StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
        languages = mapper.getLanguageList();
        assert(languages != null && languages.size() > 0);
        return languages;
    }

    Profile testProfile;
    private Profile getTestProfile(SqlSession sqlSession){
        if(testProfile != null) return testProfile;

        User test = getTestUser(sqlSession);
        Language en = getLanguages(sqlSession).stream().filter(x -> x.getCode().compareTo("en") == 0).findFirst().get();
        StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
        testProfile = mapper.getProfileByUserIdAndLanguage(test.getId(), en.getId());
        assert(testProfile != null);

        return testProfile;
    }



    @Test
    public void testCreateProfile() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);

            User test = getTestUser(sqlSession);
            Language en = getLanguages(sqlSession).stream().filter(x -> x.getCode().compareTo("en") == 0).findFirst().get();

            Profile p = new Profile();
            p.setUserId(test.getId());
            p.setLanguageId(en.getId());
            p.setLevel("C2");
            p.setStatus("A");
            int row = mapper.createProfile(p);
            System.out.println(p);
            sqlSession.commit();
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testGetProfileByUserId() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);

            User test = getTestUser(sqlSession);

            List<Profile> p = mapper.getProfileByUserId(test.getId());
            assert(p != null && p.size() > 0);
            System.out.println(p);
        }
        finally{
            sqlSession.close();
        }
    }


    @Test
    public void testGetProfileByUserIdAndLanguage() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);

            User test = getTestUser(sqlSession);
            Language en = getLanguages(sqlSession).stream().filter(x -> x.getCode().compareTo("en") == 0).findFirst().get();

            Profile p = mapper.getProfileByUserIdAndLanguage(test.getId(), en.getId());
            assert(p!=null);
            System.out.println(p);
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testGetProfile() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
            Profile p = mapper.getProfile(1);
            assert(p != null);
            System.out.println(p);
        }
        finally{
            sqlSession.close();
        }
    }


    @Test
    public void testUpdateProfile() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
            Profile p = getTestProfile(sqlSession);
            assert(p!= null);
            p.setLevel("A1");
            int row = mapper.updateProfile(p);
            System.out.println(p);
            sqlSession.commit();
        }
        finally{
            sqlSession.close();
        }
    }


    @Test
    public void testAddVocabulary() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);

            User test = getTestUser(sqlSession);
            Language en = getLanguages(sqlSession).stream().filter(x -> x.getCode().compareTo("en") == 0).findFirst().get();
            Profile p = mapper.getProfileByUserIdAndLanguage(test.getId(), en.getId());

            Vocabulary vocab = new Vocabulary();
            vocab.setProgress(Constant.PROGRESS_LEARNING);
            vocab.setProfileId(p.getId());
            vocab.setWord("fuck");

            int row = mapper.addVocabulary(vocab);
            System.out.println(p);
            sqlSession.commit();
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testGetVocabularyByProfileIdAndStatus() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
            User test = getTestUser(sqlSession);
            Language en = getLanguages(sqlSession).stream().filter(x -> x.getCode().compareTo("en") == 0).findFirst().get();
            Profile p = mapper.getProfileByUserIdAndLanguage(test.getId(), en.getId());
            assert(p != null);

            List<Vocabulary> vlist = mapper.getVocabularyByProfileIdAndProgress(p.getId(), List.of(Constant.PROGRESS_LEARNING));
            assert(vlist != null && vlist.size() > 0);
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testUpdateVocabulary() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
            User test = getTestUser(sqlSession);
            Language en = getLanguages(sqlSession).stream().filter(x -> x.getCode().compareTo("en") == 0).findFirst().get();
            Profile p = mapper.getProfileByUserIdAndLanguage(test.getId(), en.getId());
            assert(p != null);

            List<Vocabulary> vlist = mapper.getVocabularyByProfileIdAndProgress(p.getId(), List.of(Constant.PROGRESS_LEARNING));
            assert(vlist != null && vlist.size() > 0);

            Vocabulary v = vlist.get(0);
            v.setProgress(Constant.PROGRESS_COMPLETED);

            int a = mapper.updateVocabulary(v);
            sqlSession.commit();
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testDeleteVocabulary() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
            User test = getTestUser(sqlSession);
            Language en = getLanguages(sqlSession).stream().filter(x -> x.getCode().compareTo("en") == 0).findFirst().get();
            Profile p = mapper.getProfileByUserIdAndLanguage(test.getId(), en.getId());
            assert(p != null);

            List<Vocabulary> vlist = mapper.getVocabularyByProfileIdAndProgress(p.getId(), List.of(Constant.PROGRESS_COMPLETED));
            assert(vlist != null && vlist.size() > 0);

            Vocabulary v = vlist.get(0);

            int a = mapper.deleteVocabulary(v);
            sqlSession.commit();
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testCreateArticle() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);

            Profile test = getTestProfile(sqlSession);

            Article a = new Article();
            a.setStatus(Constant.STATUS_ACTIVE);
            a.setContent("This is a test content");
            a.setTitle("This is a test title");
            a.setProfileId(test.getId());

            int r = mapper.createArticle(a);
            sqlSession.commit();
        }
        finally{
            sqlSession.close();
        }
    }


    @Test
    public void testGetArticles() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);

            Profile p = getTestProfile(sqlSession);

            List<Article> aa = mapper.getArticlesByProfileId(p.getId(), 0);
            assert(aa!=null && aa.size() > 0);

            Article a0 = aa.get(0);
            Article a0r = mapper.getArticleById(a0.getId());
            assert(a0r != null && a0.getId() == a0r.getId());

            List<Integer> ids = aa.stream().map(x -> x.getId()).toList();
            List<Article> aar =  mapper.getArticlesById(ids, 0);

            assert(aar!= null && aa.size() == aar.size());

        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testUpdateArticles() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);

            Profile p = getTestProfile(sqlSession);
            List<Article> aa = mapper.getArticlesByProfileId(p.getId(), 0);

            assert(aa!=null && aa.size() > 0);
            Article a0 = aa.get(0);

            a0.setTitle("Updated title: This is a test title");

            int a = mapper.updateArticle(a0);
            sqlSession.commit();
        }
        finally{
            sqlSession.close();
        }
    }

    //flash card: skip for the time being

    //language and resource
    @Test
    public void testGetLanguageList() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
            List<Language> p = mapper.getLanguageList();
            assert(p != null && p.size() > 0);
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testGetResourceByLangugageId() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
            List<Language> p = mapper.getLanguageList();
            assert(p != null && p.size() > 0);
            List<Resource> r = mapper.getResourceByLanguageId(p.get(0).getId());

        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testGetResourceByResourceId() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
            List<Language> p = mapper.getLanguageList();
            assert(p != null && p.size() > 0);
            List<Resource> r = mapper.getResourceByLanguageId(p.get(0).getId());
            assert(r != null && r.size() > 0);
            Resource r2 = mapper.getResourceByResourceId(r.get(0).getId());
            assert(r2 != null);
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testGetWordByResourceId() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            StudyMapper mapper = sqlSession.getMapper(StudyMapper.class);
            List<Language> p = mapper.getLanguageList();
            assert(p != null && p.size() > 0);
            List<Resource> r = mapper.getResourceByLanguageId(p.get(0).getId());
            assert(r != null && r.size() > 0);
            List<String> w = mapper.getWordByResourceId(r.get(0).getId());
            assert(w != null && w.size() > 0);
        }
        finally{
            sqlSession.close();
        }
    }

}
