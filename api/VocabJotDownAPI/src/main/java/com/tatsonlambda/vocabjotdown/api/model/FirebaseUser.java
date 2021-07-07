package com.tatsonlambda.vocabjotdown.api.model;

import com.tatsonlambda.vocabjotdown.entity.User;
import lombok.Data;

@Data
public class FirebaseUser {

    private String issuer;
    private String picture;
    private String email;
    private boolean isEmailVerified;
    private String uid;
    private String name;

    private User internalUser;
}
