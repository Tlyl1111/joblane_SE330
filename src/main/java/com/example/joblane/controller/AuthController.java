package com.example.joblane.controller;

import com.example.joblane.entity.Users;
import com.example.joblane.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserRepository usersRepository;

    @PostMapping("/login")
    public String login(@RequestBody Users user) {
        Users foundUser = usersRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (foundUser != null) {
            return "Login Successful!";
        } else {
            return "Login Failed";
        }
    }
}
