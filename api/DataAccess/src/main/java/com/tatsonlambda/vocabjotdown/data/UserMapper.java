package com.tatsonlambda.vocabjotdown.data;

import com.tatsonlambda.vocabjotdown.entity.User;
import com.tatsonlambda.vocabjotdown.entity.UserActivity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Mapper
@Service
public interface UserMapper {

    User getUserById(@Param("userId") int userId);

    List<User> searchUser(@Param("idList") List<Integer> idList, @Param("userNameList") List<String> userNameList, @Param("emailList") List<String> emailList);

    List<String> getUserRole(@Param("userId") int userId);

    int createUser(User user);

    int updateUser(User user);

    int deleteUserById(@Param("userId") int userId);

    int createUserActivity(UserActivity activity);

    List<UserActivity> searchUserActivity(@Param("userId") Long userId, @Param("type") String type);
}
