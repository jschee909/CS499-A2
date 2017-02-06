package myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Author.
 */
@Entity
@Table(name = "author")
public class Author implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Book> books = new HashSet<>();

    @OneToMany(mappedBy = "author")
    @JsonIgnore
    private Set<Magazine> magazines = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Author name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Book> getBooks() {
        return books;
    }

    public Author books(Set<Book> books) {
        this.books = books;
        return this;
    }

    public Author addBook(Book book) {
        this.books.add(book);
        book.setAuthor(this);
        return this;
    }

    public Author removeBook(Book book) {
        this.books.remove(book);
        book.setAuthor(null);
        return this;
    }

    public void setBooks(Set<Book> books) {
        this.books = books;
    }

    public Set<Magazine> getMagazines() {
        return magazines;
    }

    public Author magazines(Set<Magazine> magazines) {
        this.magazines = magazines;
        return this;
    }

    public Author addMagazine(Magazine magazine) {
        this.magazines.add(magazine);
        magazine.setAuthor(this);
        return this;
    }

    public Author removeMagazine(Magazine magazine) {
        this.magazines.remove(magazine);
        magazine.setAuthor(null);
        return this;
    }

    public void setMagazines(Set<Magazine> magazines) {
        this.magazines = magazines;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Author author = (Author) o;
        if (author.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, author.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Author{" +
            "id=" + id +
            ", name='" + name + "'" +
            '}';
    }
}
