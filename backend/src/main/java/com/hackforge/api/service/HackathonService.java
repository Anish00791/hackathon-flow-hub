package com.hackforge.api.service;

import com.hackforge.api.model.Hackathon;
import com.hackforge.api.model.User;
import com.hackforge.api.repository.HackathonRepository;
import com.hackforge.api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@SuppressWarnings("java:S125")
public class HackathonService {

    private final HackathonRepository hackathonRepository;
    private final UserRepository userRepository;

    public List<Hackathon> getAllHackathons() {
        return hackathonRepository.findAll();
    }

    public List<Hackathon> getFeaturedHackathons() {
        return hackathonRepository.findByFeaturedTrue();
    }

    public Hackathon getHackathonById(Long id) {
        return hackathonRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hackathon not found"));
    }

    @Transactional
    public Hackathon createHackathon(Hackathon hackathon) {
        String currentUserEmail = getCurrentUserEmail();
        User organizer = userRepository.findByEmail(currentUserEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        hackathon.setOrganizer(organizer);
        return hackathonRepository.save(hackathon);
    }

    @Transactional
    public Hackathon updateHackathon(Long id, Hackathon updatedHackathon) {
        Hackathon existingHackathon = getHackathonById(id);
        String currentUserEmail = getCurrentUserEmail();
        
        if (!existingHackathon.getOrganizer().getEmail().equals(currentUserEmail)) {
            throw new RuntimeException("Not authorized to update this hackathon");
        }

        existingHackathon.setTitle(updatedHackathon.getTitle());
        existingHackathon.setDescription(updatedHackathon.getDescription());
        existingHackathon.setStartDate(updatedHackathon.getStartDate());
        existingHackathon.setEndDate(updatedHackathon.getEndDate());
        existingHackathon.setLocation(updatedHackathon.getLocation());
        existingHackathon.setMode(updatedHackathon.getMode());
        existingHackathon.setMaxParticipants(updatedHackathon.getMaxParticipants());
        existingHackathon.setFeatured(updatedHackathon.isFeatured());
        existingHackathon.setRegistrationOpen(updatedHackathon.isRegistrationOpen());
        existingHackathon.setImageUrl(updatedHackathon.getImageUrl());
        existingHackathon.setTags(updatedHackathon.getTags());

        return hackathonRepository.save(existingHackathon);
    }

    @Transactional
    public void deleteHackathon(Long id) {
        Hackathon hackathon = getHackathonById(id);
        String currentUserEmail = getCurrentUserEmail();
        
        if (!hackathon.getOrganizer().getEmail().equals(currentUserEmail)) {
            throw new RuntimeException("Not authorized to delete this hackathon");
        }

        hackathonRepository.delete(hackathon);
    }

    @Transactional
    public void registerForHackathon(Long id) {
        Hackathon hackathon = getHackathonById(id);
        String currentUserEmail = getCurrentUserEmail();
        User user = userRepository.findByEmail(currentUserEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!hackathon.isRegistrationOpen()) {
            throw new RuntimeException("Registration is closed for this hackathon");
        }

        if (hackathon.getParticipants().size() >= hackathon.getMaxParticipants()) {
            throw new RuntimeException("Hackathon is full");
        }

        if (hackathon.getParticipants().contains(user)) {
            throw new RuntimeException("Already registered for this hackathon");
        }

        hackathon.getParticipants().add(user);
        hackathonRepository.save(hackathon);
    }

    private String getCurrentUserEmail() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
