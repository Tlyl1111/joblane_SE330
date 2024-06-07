package com.example.joblane.controller;

import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Users;
import com.example.joblane.model.dto.UserLoginRequest;
import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;
import com.example.joblane.service.UserService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLoginRequest request) {
      boolean isValid = userService.validateUser(request.getEmail(), request.getPassword());
      if (isValid) {
        System.out.println("successfully");
          return ResponseEntity.ok("Đăng nhập thành công");
          
      } else {
        System.out.println("unsuccessfully");
          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Đăng nhập không thành công");
      }
    }
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp(@RequestBody Users user) {
      if (userRepository.existsByEmail(user.getEmail())) {
        return ResponseEntity.badRequest().body("Email already in use");
    }
    userRepository.save(user);
    System.out.println(user.getId());
    return ResponseEntity.ok().body(user);
    }

     @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @PostMapping("/jobseeker")
    public JobSeekers createJobSeeker(@RequestBody Map<String, String> request) {
      String userId = request.get("userId");
      Users user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
      
      JobSeekers jobSeeker = new JobSeekers();
      jobSeeker.setUserId(user);
      
      user.setRole("Jobseeker");
      userRepository.save(user);
      System.out.println(jobSeeker);

      return jobSeekerRepository.save(jobSeeker);
    }
    

    
}