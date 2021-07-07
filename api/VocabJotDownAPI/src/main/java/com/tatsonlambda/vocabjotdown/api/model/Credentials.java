package com.tatsonlambda.vocabjotdown.api.model;
import com.google.firebase.auth.FirebaseToken;
import lombok.Data;

@Data
public class Credentials {
    private FirebaseToken decodedToken;
    private String idToken;
    private String session;
}
