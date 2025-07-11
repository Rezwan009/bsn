package com.devrezo.book.email;

import lombok.Getter;

@Getter
public enum EmailTemplateName {

    ACTIVATED_ACCOUNT("activate_account");

    private final String name;

    EmailTemplateName(String name) {
        this.name = name;
    }
}
