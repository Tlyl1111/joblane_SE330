package com.example.joblane.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.joblane.entity.Companies;
import com.example.joblane.entity.JobPosts;
import com.example.joblane.repository.JobPostRepository;

@RestController
@RequestMapping("/api")
public class JobPostController {
    @Autowired
    private JobPostRepository jobPostRepository;

    @GetMapping("/jobposts")
    public ResponseEntity<List<JobPosts>> getAllJobPosts() {
        List<JobPosts> jobPosts = jobPostRepository.findAll();
    // Xử lý nếu có job post nào có companyId null
    jobPosts.forEach(job -> {
        if (job.getCompanyId() == null) {
            job.setCompanyId(new Companies()); // Hoặc bất kỳ xử lý nào khác phù hợp
        }
    });
    return ResponseEntity.ok(jobPosts);
    }
}
