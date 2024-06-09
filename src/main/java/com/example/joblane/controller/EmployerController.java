package com.example.joblane.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblane.model.mapper.EmployerUpdateRequest;
import com.example.joblane.model.mapper.ProfileUpdateRequest;
import com.example.joblane.service.EmployerService;
import com.example.joblane.service.JobSeekerService;

@RestController
@RequestMapping("/api")
public class EmployerController {
    @Autowired
  private EmployerService employerService;

  @PostMapping("/updateEmployer")
  public ResponseEntity<Map<String, String>> updateProfile(@RequestBody EmployerUpdateRequest request) {
    Map<String, String> response = new HashMap<>();
    try {
      System.out.println("Received request: " + request); // Thêm dòng này để kiểm tra dữ liệu nhận được
      employerService.updateProfile(request);
      response.put("message", "Employer updated successfully");
      return ResponseEntity.ok(response);
    } catch (Exception e) {
      response.put("error", "Error updating profile: " + e.getMessage());
      return ResponseEntity.status(500).body(response);
    }
  }
}