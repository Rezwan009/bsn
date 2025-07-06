package com.devrezo.book.handler;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import static org.springframework.http.HttpStatus.*;

@Getter
public enum BusinessErrorCodes {

    NO_CODE(0, NOT_IMPLEMENTED,"No Code"),
    INCORRECT_CURRENT_PASSWORD(300, BAD_REQUEST, "Password Incorrect"),
    NEW_PASSWORD_DOES_NOT_MATCH(301, BAD_REQUEST, "New Password Does not Match"),
    ACCOUNT_LOCKED(302,FORBIDDEN,"User Account is locked"),
    ACCOUNT_DISABLED(303,FORBIDDEN,"User Account is disabled"),
    BAD_CREDENTIALS(304,FORBIDDEN,"Username and / or password is incorrect")
    ;


    private final int code;
    private final HttpStatus httpStatus;
    private final String description;

    BusinessErrorCodes(int code, HttpStatus httpStatus, String description) {
        this.code = code;
        this.httpStatus = httpStatus;
        this.description = description;
    }
}
