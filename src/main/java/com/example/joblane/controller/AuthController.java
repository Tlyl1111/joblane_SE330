package com.example.joblane.controller;

import com.example.joblane.model.dto.UserLoginRequest;
import com.example.joblane.service.UserService;
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
    
}