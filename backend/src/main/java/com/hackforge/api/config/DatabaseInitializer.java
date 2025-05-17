package com.hackforge.api.config;

import com.hackforge.api.model.Role;
import com.hackforge.api.model.ERole;
import com.hackforge.api.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseInitializer {

    @Bean
    public CommandLineRunner initDatabase(RoleRepository roleRepository) {
        return args -> {
            // Initialize default roles if they don't exist
            for (ERole role : ERole.values()) {
                if (!roleRepository.existsByName(role)) {
                    Role newRole = new Role();
                    newRole.setName(role);
                    roleRepository.save(newRole);
                }
            }
        };
    }
} 