package com.example.notes;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "notes")
public class Note {
    @Id
    private String id;
    private String text;
    private Date createdAt = new Date();

    // Празен конструктор (задолжителен за Spring)
    public Note() {}

    // Конструктор со текст
    public Note(String text) {
        this.text = text;
    }

    // Getter и Setter методи
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public Date getCreatedAt() { return createdAt; }
    public void setCreatedAt(Date createdAt) { this.createdAt = createdAt; }
}