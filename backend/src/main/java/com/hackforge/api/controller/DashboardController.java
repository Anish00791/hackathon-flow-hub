// src/main/java/com/hackforge/api/controller/DashboardController.java
package com.hackforge.api.controller;

import com.hackforge.api.model.Hackathon;
import com.hackforge.api.model.User;
import com.hackforge.api.repository.UserRepository;
import com.hackforge.api.repository.HackathonRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final UserRepository userRepository;
    private final HackathonRepository hackathonRepository;

    public DashboardController(UserRepository userRepository, HackathonRepository hackathonRepository) {
        this.userRepository = userRepository;
        this.hackathonRepository = hackathonRepository;
    }

    @GetMapping
    public ResponseEntity<?> getDashboard(@AuthenticationPrincipal UserDetails userDetails) {
        String email = userDetails.getUsername();
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "User not found"));
        }
        // Assuming you have a participatedHackathons relationship
        List<Hackathon> hackathons = user.getParticipatedHackathons().stream().toList();
        return ResponseEntity.ok(Map.of(
            "user", user,
            "hackathons", hackathons
        ));
    }
}