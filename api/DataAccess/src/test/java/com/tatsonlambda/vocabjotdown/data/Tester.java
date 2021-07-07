package com.tatsonlambda.vocabjotdown.data;

import com.tatsonlambda.vocabjotdown.entity.Profile;
import com.tatsonlambda.vocabjotdown.entity.User;
import com.tatsonlambda.vocabjotdown.entity.UserActivity;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.List;

public class Tester {

    public SqlSessionFactory getSqlSessionFactory() throws IOException {
        // mybatis configuration file. The root address of this location is: resources. The path should be correct.
        String resource = "mybatis-test-config.xml";
        // Get profile stream
        InputStream inputStream = Resources.getResourceAsStream(resource);
        // Create a session factory and pass in the profile information of mybatis
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        return sqlSessionFactory;
    }


    @Test
    public void testGetUserById() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);
            User p = mapper.getUserById(1);
            System.out.println(p);
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testSearchUser() throws IOException {
        SqlSession sqlSession = null;

        try{
            sqlSession = this.getSqlSessionFactory().openSession();
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);
            List<User> p = null;
            p = mapper.searchUser(List.of(1), null, null);
            p = mapper.searchUser(null, List.of("admin"), null);
            p = mapper.searchUser(null, null, List.of("tatsonlambda@gmail.com"));
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testGetUserRole() throws IOException {

        SqlSession sqlSession = this.getSqlSessionFactory().openSession();

        try{
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);
            List<User> p = mapper.searchUser(null, List.of("admin"), null);
            assert(p != null && p.size() > 0);
            List<String> profile = mapper.getUserRole(p.get(0).getId());
            System.out.println(p);
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testCreateUser() throws IOException {

        SqlSession sqlSession = this.getSqlSessionFactory().openSession();

        try{
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);
            User u = new User();
            u.setLoginName("javatest"); u.setCommonName("javaTest"); u.setEmail("tom87416@gmail.com");
            u.setStatus("A");
            int uid = mapper.createUser(u);
            sqlSession.commit();
            System.out.println(uid);
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testUpdateUser() throws IOException {

        SqlSession sqlSession = this.getSqlSessionFactory().openSession();

        try{
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);

            List<User> ulist = mapper.searchUser(null, List.of("javatest"), null);
            assert(ulist != null && ulist.size() > 0);

            User u = ulist.get(0);
            u.setCommonName("fucktest");

            int row = mapper.updateUser(u);
            sqlSession.commit();
            System.out.println(row);
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testCreateUserActivity() throws IOException {

        SqlSession sqlSession = this.getSqlSessionFactory().openSession();

        try{
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);
            UserActivity ua = new UserActivity();

            List<User> ulist = mapper.searchUser(null, List.of("javatest"), null);
            assert(ulist != null && ulist.size() > 0);
            User u = ulist.get(0);


            ua.setUserId(u.getId());
            ua.setMessage("jav unit test");
            ua.setType("testing");
            ua.setActionTime(new Date());
            int k = mapper.createUserActivity(ua);
            sqlSession.commit();
            System.out.println(k);
        }
        finally{
            sqlSession.close();
        }
    }

    @Test
    public void testDeleteUserById() throws IOException {

        SqlSession sqlSession = this.getSqlSessionFactory().openSession();

        try{
            UserMapper mapper = sqlSession.getMapper(UserMapper.class);
            List<User> ulist = mapper.searchUser(null, List.of("javatest"), null);
            assert(ulist != null && ulist.size() > 0);

            User u = ulist.get(0);
            int row = mapper.deleteUserById(u.getId());
            sqlSession.commit();
            System.out.println(row);
        }
        finally{
            sqlSession.close();
        }
    }

}
