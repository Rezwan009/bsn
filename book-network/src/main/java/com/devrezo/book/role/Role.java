package com.devrezo.book.role;

import com.devrezo.book.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
@Table(name = "roles")
@Entity
public class Role {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(unique = true)
    private String name;

    @ManyToMany(mappedBy = "roles")
    @JsonIgnore
    private List<User> users;

    @CreatedDate
    @Column(nullable = false,updatable = false)
    private LocalDateTime createDate;

    @LastModifiedDate
    @Column(insertable = false)
    private LocalDateTime lastModifiedDate;
}
