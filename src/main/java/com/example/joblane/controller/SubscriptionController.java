package com.example.joblane.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblane.entity.Users;
import com.example.joblane.repository.UserRepository;
import com.example.joblane.service.EmailService;

@RestController
@RequestMapping("/api/subscribe")
public class SubscriptionController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Void> subscribe(@RequestBody String email) {
        if (userRepository.existsByEmail(email)) {
            return ResponseEntity.badRequest().build(); // Email already exists
        }

        Users user = new Users(email);
        userRepository.save(user);
        emailService.sendSubscriptionEmail(email);

        return ResponseEntity.noContent().build();
    }
}