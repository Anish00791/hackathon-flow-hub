package com.hackforge.api.controller;

import com.hackforge.api.model.Hackathon;
import com.hackforge.api.service.HackathonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hackathons")
@RequiredArgsConstructor
public class HackathonController {

    private final HackathonService hackathonService;


    @GetMapping("/public")
    public ResponseEntity<List<Hackathon>> getAllHackathons() {
        return ResponseEntity.ok(hackathonService.getAllHackathons());
    }

    @GetMapping("/public/featured")
    public ResponseEntity<List<Hackathon>> getFeaturedHackathons() {
        return ResponseEntity.ok(hackathonService.getFeaturedHackathons());
    }

    @GetMapping("/public/{id}")
    public ResponseEntity<Hackathon> getHackathonById(@PathVariable Long id) {
        return ResponseEntity.ok(hackathonService.getHackathonById(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('ORGANIZER')")
    public ResponseEntity<Hackathon> createHackathon(@RequestBody Hackathon hackathon) {
        return ResponseEntity.ok(hackathonService.createHackathon(hackathon));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ORGANIZER')")
    public ResponseEntity<Hackathon> updateHackathon(
            @PathVariable Long id,
            @RequestBody Hackathon hackathon) {
        return ResponseEntity.ok(hackathonService.updateHackathon(id, hackathon));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ORGANIZER')")
    public ResponseEntity<Void> deleteHackathon(@PathVariable Long id) {
        hackathonService.deleteHackathon(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{id}/register")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Void> registerForHackathon(@PathVariable Long id) {
        hackathonService.registerForHackathon(id);
        return ResponseEntity.ok().build();
    }
} 