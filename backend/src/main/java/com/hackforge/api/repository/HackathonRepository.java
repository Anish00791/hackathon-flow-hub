package com.hackforge.api.repository;

import com.hackforge.api.model.Hackathon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HackathonRepository extends JpaRepository<Hackathon, Long> {
    List<Hackathon> findByFeaturedTrue();
    List<Hackathon> findByRegistrationOpenTrue();
    List<Hackathon> findByOrganizerId(Long organizerId);
    List<Hackathon> findByParticipantsId(Long participantId);
} 