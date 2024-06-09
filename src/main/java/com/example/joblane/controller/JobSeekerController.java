package com.example.joblane.controller;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Users;
import com.example.joblane.model.mapper.ProfileUpdateRequest;

import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;
import com.example.joblane.service.JobSeekerService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api")
public class JobSeekerController {
  @Autowired
  private JobSeekerService jobSeekerService;

  @PostMapping("/updateProfile")
  public ResponseEntity<Map<String, String>> updateProfile(@RequestBody ProfileUpdateRequest request) {
    Map<String, String> response = new HashMap<>();
    try {
      System.out.println("Received request: " + request); // Thêm dòng này để kiểm tra dữ liệu nhận được
      jobSeekerService.updateProfile(request);
      response.put("message", "Profile updated successfully");
      return ResponseEntity.ok(response);
    } catch (Exception e) {
      response.put("error", "Error updating profile: " + e.getMessage());
      return ResponseEntity.status(500).body(response);
    }
  }
}