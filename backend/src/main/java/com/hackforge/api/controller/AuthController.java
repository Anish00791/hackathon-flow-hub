package com.hackforge.api.controller;

import com.hackforge.api.model.Role;
import com.hackforge.api.model.User;
import com.hackforge.api.model.ERole;
import com.hackforge.api.dto.LoginRequest;
import com.hackforge.api.dto.RegisterRequest;
import com.hackforge.api.repository.RoleRepository;
import com.hackforge.api.repository.UserRepository;
import com.hackforge.api.security.JwtService;
import com.hackforge.api.security.UserDetailsImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private JwtService jwtService;

    // ✅ All-Args Constructor
    public AuthController(AuthenticationManager authenticationManager,
                          UserRepository userRepository,
                          RoleRepository roleRepository,
                          PasswordEncoder passwordEncoder,
                          JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // ✅ Default Constructor
    public AuthController() {}

    // ✅ Setters
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void setRoleRepository(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public void setJwtService(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    // ✅ Getters
    public AuthenticationManager getAuthenticationManager() {
        return authenticationManager;
    }

    public UserRepository getUserRepository() {
        return userRepository;
    }

    public RoleRepository getRoleRepository() {
        return roleRepository;
    }

    public PasswordEncoder getPasswordEncoder() {
        return passwordEncoder;
    }

    public JwtService getJwtService() {
        return jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", "Email is already registered"));
        }

        User user = new User();
        user.setName(request.name());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));

        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElse(null);
        if (userRole == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Default role not found in database"));
        }

        user.setRoles(Collections.singleton(userRole));
        userRepository.save(user);

        // Create authentication token
        UserDetailsImpl userDetails = UserDetailsImpl.build(user);
        String jwt = jwtService.generateToken(userDetails);

        // Return response with token and user info
        Map<String, Object> response = new HashMap<>();
        response.put("token", jwt);
        response.put("user", Map.of(
            "id", user.getId(),
            "name", user.getName(),
            "email", user.getEmail(),
            "role", "USER"
        ));

        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.email(), request.password())
            );
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid email or password"));
        }

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String jwt = jwtService.generateToken(userDetails);

        User user = userRepository.findByEmail(request.email())
                .orElse(null);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "User not found"));
        }

        Map<String, Object> response = new HashMap<>();
        response.put("token", jwt);
        response.put("user", Map.of(
                "id", userDetails.getId(),
                "email", userDetails.getUsername(),
                "name", user.getName(),
                "roles", user.getRoles().stream()
                        .map(role -> role.getName().name())
                        .collect(Collectors.toList())
        ));

        return ResponseEntity.ok(response);
    }
}

