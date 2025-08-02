package com.devrezo.book.book;


import com.devrezo.book.common.PageResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("books")
@AllArgsConstructor
@Tag(name = "Book")
public class BookController {
    private final BookService bookService;

    @PostMapping
    public ResponseEntity<Integer> save(
            @Valid @RequestBody BookRequest request,
            Authentication connectedUsr){

        return ResponseEntity.ok(bookService.save(request,connectedUsr));
    }

    @GetMapping("{book-id}")
    public ResponseEntity<BookResponse> findById(@PathVariable Integer bookId){

        return ResponseEntity.ok(bookService.findById(bookId));
    }

    @GetMapping
    public ResponseEntity<PageResponse<BookResponse>> findAllBooks(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "0", required = false) int size,
            Authentication connectedUser
    ){
        return ResponseEntity.ok(bookService.findAllBooks(page,size,connectedUser));
    }

    @GetMapping("owner")
    public ResponseEntity<PageResponse<BookResponse>> findAllBooksByOwner(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "0", required = false) int size,
            Authentication connectedUser
    ){
        return ResponseEntity.ok(bookService.findAllBooksByOwner(page,size,connectedUser));
    }

    @GetMapping("borrowed")
    public ResponseEntity<PageResponse<BorrowedBookResponse>> findAllBorrowedBooks(
            @RequestParam(name = "page", defaultValue = "0", required = false) int page,
            @RequestParam(name = "size", defaultValue = "0", required = false) int size,
            Authentication connectedUser
    ){
        return ResponseEntity.ok(bookService.findAllBorrowedBooks(page,size,connectedUser));
    }
}
