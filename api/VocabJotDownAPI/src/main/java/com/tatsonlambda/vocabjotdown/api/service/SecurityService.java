package com.tatsonlambda.vocabjotdown.api.service;

import com.tatsonlambda.vocabjotdown.Constant;
import com.tatsonlambda.vocabjotdown.api.model.Credentials;
import com.tatsonlambda.vocabjotdown.api.model.FirebaseUser;
import com.tatsonlambda.vocabjotdown.data.UserMapper;
import com.tatsonlambda.vocabjotdown.entity.UserActivity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SecurityService {

    @Autowired
    UserMapper userMapper;

    public static final List<GrantedAuthority> DEFAULT_AUTHORITIES = List.of(new SimpleGrantedAuthority("user"));

    public FirebaseUser getUser() {
        FirebaseUser userPrincipal = null;
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Object principal = securityContext.getAuthentication().getPrincipal();
        if (principal instanceof FirebaseUser) {
            userPrincipal = ((FirebaseUser) principal);
        }
        return userPrincipal;
    }

    public Credentials getCredentials() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        return (Credentials) securityContext.getAuthentication().getCredentials();
    }

    public com.tatsonlambda.vocabjotdown.entity.User convertFirebaseUserToInternalUser(FirebaseUser firebaseUser){
        List<com.tatsonlambda.vocabjotdown.entity.User> r = userMapper.searchUser(null, List.of(firebaseUser.getUid()), null);
        if(r == null || r.size() == 0) return null;
        else return r.get(0);
    }

    public List<GrantedAuthority> getUserRole(com.tatsonlambda.vocabjotdown.entity.User user){
        List<String> roles =  userMapper.getUserRole(user.getId());
        if(roles == null || roles.size()== 0)
            return DEFAULT_AUTHORITIES;
        else {
            List<GrantedAuthority> result = new ArrayList<>();
            for (int i = 0; i < roles.size(); i++) {
                result.add(new SimpleGrantedAuthority(roles.get(i)));
            }
            return result;
        }
    }

    public com.tatsonlambda.vocabjotdown.entity.User createInternalUserFromFirebaseUser(FirebaseUser firebaseUser){
        com.tatsonlambda.vocabjotdown.entity.User user = new com.tatsonlambda.vocabjotdown.entity.User();
        user.setCommonName(firebaseUser.getName());
        user.setStatus(Constant.STATUS_ACTIVE);
        user.setEmail(firebaseUser.getEmail());
        user.setLoginName(firebaseUser.getUid());
        userMapper.createUser(user);

        return user;
    }

    public void logUserLogin(int userId){
        UserActivity ua = new UserActivity();
        ua.setUserId(userId);
        ua.setMessage("login");
        ua.setActionTime(new Date());
        ua.setType("login");
        userMapper.createUserActivity(ua);
    }

    public void logUserLogout(int userId){
        UserActivity ua = new UserActivity();
        ua.setUserId(userId);
        ua.setMessage("logout");
        ua.setActionTime(new Date());
        ua.setType("logout");
        userMapper.createUserActivity(ua);
    }

}
