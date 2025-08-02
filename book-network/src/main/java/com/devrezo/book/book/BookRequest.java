package com.devrezo.book.book;

public record BookRequest (
        Integer id,
        String title,
        String authorName,
        String isbn,
        String synopsis,
        boolean shareable
){


}


