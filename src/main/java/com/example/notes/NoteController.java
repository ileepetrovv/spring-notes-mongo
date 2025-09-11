package com.example.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*") // Дозволи пристап од сите извори
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    // GET /api/notes - Земи ги сите белешки
    @GetMapping
    public List<Note> getAllNotes() {
        return noteRepository.findAllByOrderByCreatedAtDesc();
    }

    // POST /api/notes - Креирај нова белешка
    @PostMapping
    public Note createNote(@RequestBody Note note) {
        return noteRepository.save(note);
    }
}