package com.devrezo.book.feedback;


import com.devrezo.book.book.Book;
import com.devrezo.book.common.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class Feedback extends BaseEntity {

    private Double note;
    private String comment;

    // relationships
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;
}
