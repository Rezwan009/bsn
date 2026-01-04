package com.devrezo.book.book;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record BookRequest (
        Integer id,
        @NotNull(message = "Book title is required")
        @NotEmpty(message = "Book title is non empty field")
        String title,
        @NotNull(message = "Book Author Name is required")
        @NotEmpty(message = "Book Author Name is non empty field")
        String authorName,
        @NotNull(message = "Book isbn is required field")
        @NotEmpty(message = "Book isbn is non empty field")
        String isbn,
        @NotNull(message = "Book synopsis is required field")
        @NotEmpty(message = "Book synopsis is non empty field")
        String synopsis,
        boolean shareable
){


}


