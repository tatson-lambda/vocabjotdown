package com.tatsonlambda.vocabjotdown.api.controllers;

import com.google.firebase.auth.*;
import com.tatsonlambda.vocabjotdown.api.model.*;
import com.tatsonlambda.vocabjotdown.api.service.*;
import com.tatsonlambda.vocabjotdown.data.StudyMapper;
import com.tatsonlambda.vocabjotdown.entity.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.*;
import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.TimeUnit;


@CrossOrigin(origins = "http://localhost:8083")
@RestController
@RequestMapping("/api/v1/")
public class VocabJotDownController {

    Logger logger = LoggerFactory.getLogger(VocabJotDownController.class);

    @Autowired
    MainService mainService;

    @Autowired
    DictionaryService dictionaryService;

    @Autowired
    SecurityService securityService;

    @Value( "${server.servlet.session.timeout}" )
    private long sessionTimeOut;

    private String getBearerToken(HttpServletRequest request) {
        String bearerToken = null;
        String authorization = request.getHeader("Authorization");
        if (StringUtils.hasText(authorization) && authorization.startsWith("Bearer ")) {
            bearerToken = authorization.substring(7, authorization.length());
        }
        return bearerToken;
    }

    private FirebaseUser firebaseTokenToUserDto(FirebaseToken decodedToken) {
        FirebaseUser user = null;
        if (decodedToken != null) {
            user = new FirebaseUser();
            user.setUid(decodedToken.getUid());
            user.setName(decodedToken.getName());
            user.setEmail(decodedToken.getEmail());
            user.setPicture(decodedToken.getPicture());
            user.setIssuer(decodedToken.getIssuer());
            user.setEmailVerified(decodedToken.isEmailVerified());
        }
        return user;
    }

    @GetMapping(value = "/auth/login")
    public void login(HttpServletRequest request){

        try {

            String idToken = getBearerToken(request);
            if(idToken == null) throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Authentication token is required.", null);

            long expiresIn = TimeUnit.SECONDS.toMillis(sessionTimeOut);
            SessionCookieOptions options = SessionCookieOptions.builder().setExpiresIn(expiresIn).build();

            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
            FirebaseUser firebaseUser = firebaseTokenToUserDto(decodedToken);
            String sessionCookieValue = FirebaseAuth.getInstance().createSessionCookie(idToken, options);
            Credentials cred = new Credentials();
            cred.setIdToken(idToken);
            cred.setSession(sessionCookieValue);
            cred.setDecodedToken(decodedToken);

            User user = securityService.convertFirebaseUserToInternalUser(firebaseUser);

            if(user == null)
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Account not yet registered.", null);

            firebaseUser.setInternalUser(user);
            List<GrantedAuthority> roles = securityService.getUserRole(user);

            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                    firebaseUser,
                    cred,
                    roles
            );

            SecurityContextHolder.getContext().setAuthentication(auth);

        } catch (FirebaseAuthException e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", e);
        }
    }

    @GetMapping(value = "/auth/signup")
    public void signup(HttpServletRequest request){

        try {

            String idToken = getBearerToken(request);
            if(idToken == null) throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Authentication token is required.", null);

            long expiresIn = TimeUnit.SECONDS.toMillis(sessionTimeOut);
            SessionCookieOptions options = SessionCookieOptions.builder().setExpiresIn(expiresIn).build();

            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
            FirebaseUser firebaseUser = firebaseTokenToUserDto(decodedToken);
            String sessionCookieValue = FirebaseAuth.getInstance().createSessionCookie(idToken, options);
            Credentials cred = new Credentials();
            cred.setIdToken(idToken);
            cred.setSession(sessionCookieValue);
            cred.setDecodedToken(decodedToken);

            User user = securityService.convertFirebaseUserToInternalUser(firebaseUser);

            if(user != null)
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Account already registered.", null);

            user = securityService.createInternalUserFromFirebaseUser(firebaseUser);
            firebaseUser.setInternalUser(user);

            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                    firebaseUser,
                    cred,
                    SecurityService.DEFAULT_AUTHORITIES
            );

            SecurityContextHolder.getContext().setAuthentication(auth);

        } catch (FirebaseAuthException e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", e);
        }
    }

    @GetMapping(value = "/auth/logout")
    public void logout(HttpSession session){
        //clear the session
        try {
            FirebaseAuth.getInstance().revokeRefreshTokens(securityService.getUser().getUid());
            session.invalidate();
        } catch (FirebaseAuthException e) {
            e.printStackTrace();
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", e);
        }
    }

    @GetMapping(value = "/word/{lang}/{query}")
    public List<Word> lookup(@PathVariable String lang, @PathVariable String query) {
        try{
            return dictionaryService.lookup(lang, query);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @GetMapping(value = "/autocomplete/{lang}/{query}")
    public List<String> autocomplete(@PathVariable String lang, @PathVariable String query) {
        try{
            return dictionaryService.autocomplete(lang, query);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @GetMapping(value = "/language")
    public List<Language> getLanguage() {
        try{
            return mainService.getLanguageList();
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @GetMapping(value = "/resources/{lang}")
    public List<Resource> getResourcesByLanguageCode(@PathVariable String lang) {
        try{
            return mainService.getResourcesByLanguageCode(lang);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @GetMapping(value = "/resource/{id}")
    public Resource getResourceById(@PathVariable int id) {
        try{
            return mainService.getResourceById(id);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @GetMapping(value = "/me/vocab/{lang}")
    public List<Vocabulary> getUserVocabList(@PathVariable String lang, @RequestParam("data") Optional<String> type) {
        FirebaseUser user = securityService.getUser();

        if(user == null) throw new  ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Login required", null);

        try{
            return mainService.getUserVocabList(user.getInternalUser().getId(), lang, type.orElse("all"));
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @PostMapping(value = "/me/vocab/")
    public Vocabulary addVocab(@RequestBody Vocabulary newVocabulary) {
        FirebaseUser user = securityService.getUser();

        if(user == null) throw new  ResponseStatusException(HttpStatus.FORBIDDEN, "Login required", null);
        try{
            boolean authOK = mainService.checkProfileUnderUser(newVocabulary.getProfileId(), user.getInternalUser().getId());
            if(!authOK) throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Resource is owned by other.", null);

            return mainService.addVocab(newVocabulary);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @PutMapping(value = "/me/vocab/")
    public Vocabulary updateVocab(@RequestBody Vocabulary updateVocabulary) {
        FirebaseUser user = securityService.getUser();

        if(user == null) throw new  ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Login required.", null);
        try{
            boolean authOK = mainService.checkProfileUnderUser(updateVocabulary.getProfileId(), user.getInternalUser().getId());
            if(!authOK) throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Resource is owned by other.", null);
            if(updateVocabulary.getId() == 0) throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ID must not be null", null);

            return mainService.updateVocab(updateVocabulary);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @GetMapping(value = "/me/article/{lang}")
    public List<Article> listAllArticle(@PathVariable String lang) {
        FirebaseUser user = securityService.getUser();

        if(user == null) throw new  ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Login required.", null);
        try{
            return mainService.getUserArticles(user.getInternalUser().getId(), lang);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @PostMapping(value = "/me/article/")
    public Article addArticle(@RequestBody Article newArticle) {
        FirebaseUser user = securityService.getUser();

        if(user == null) throw new  ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Login required.", null);
        try{
            boolean authOK = mainService.checkProfileUnderUser(newArticle.getProfileId(), user.getInternalUser().getId());
            if(!authOK) throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Resource is owned by other.", null);

            return mainService.addArticle(user.getInternalUser().getId(), newArticle);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @PutMapping(value = "/me/article/")
    public Article updateArticle(@RequestBody Article updateArticle) {
        FirebaseUser user = securityService.getUser();

        if(user == null) throw new  ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Login required.", null);
        try{
            boolean authOK = mainService.checkProfileUnderUser(updateArticle.getProfileId(), user.getInternalUser().getId());
            if(!authOK) throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Resource is owned by other.", null);

            return mainService.updateArticle(user.getInternalUser().getId(), updateArticle);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @DeleteMapping(value = "/me/article/{articleId}")
    public boolean deleteArticle(int articleId) {
        FirebaseUser user = securityService.getUser();

        if(user == null) throw new  ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Login required.", null);
        try{
            return mainService.deleteArticle(user.getInternalUser().getId(), articleId);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }

    @GetMapping(value = "/me/article/{id}")
    public Article getArticle(@PathVariable int id) {
        FirebaseUser user = securityService.getUser();

        if(user == null) throw new  ResponseStatusException(HttpStatus.FORBIDDEN, "Login required.", null);
        try{
            return mainService.getArticle(user.getInternalUser().getId(), id);
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Unknown exception thrown.", null);
        }
    }


    @GetMapping(value = "/me/user")
    public User getUserDetailed() {
        FirebaseUser user = securityService.getUser();

        if(user != null){
            return securityService.getUser().getInternalUser();
        }
        else
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Login required", null);
    }

    @GetMapping(value = "/me/profile")
    public List<Profile> getUserDetailedProfile() {
        FirebaseUser user = securityService.getUser();

        if(user != null){
            return mainService.getProfileByUserId(user.getInternalUser().getId());
        }
        else
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Login required", null);
    }

    @PostMapping(value = "/me/profile/{lang}")
    public Profile createProfile(@PathVariable String lang) {
        FirebaseUser user = securityService.getUser();

        if(user != null){
            return mainService.createProfile(user.getInternalUser().getId(), lang);
        }
        else
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Login required", null);
    }

    @GetMapping(value = "/me/profile/{id}")
    public Profile getProfile(int id) {
        FirebaseUser user = securityService.getUser();

        if(user != null){
            Profile p = mainService.getProfile(id);
            if(p.getUserId() != user.getInternalUser().getId())
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Unknown exception thrown.", null);

            return p;
        }
        else
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Login required", null);
    }


}
