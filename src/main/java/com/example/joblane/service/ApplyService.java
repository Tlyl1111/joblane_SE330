package com.example.joblane.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.joblane.entity.Applications;
import com.example.joblane.entity.Employers;
import com.example.joblane.entity.JobPosts;
import com.example.joblane.entity.JobSeekers;
import com.example.joblane.model.mapper.ApplyUpdateRequest;
import com.example.joblane.model.mapper.JobPostUpdateRequest;
import com.example.joblane.repository.ApplicationRepository;
import com.example.joblane.repository.EmployerRepository;
import com.example.joblane.repository.JobPostRepository;
import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;

@Service
public class ApplyService {
    @Autowired
  private JobSeekerRepository jobSeekerRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private ApplicationRepository applicationRepository;
  
  

  public void createApplication(ApplyUpdateRequest request) {
    JobSeekers jobseeker = jobSeekerRepository.findById(request.getJobSeekerId())
      .orElseThrow(() -> new RuntimeException("Employer not found"));
    

    Applications application = new Applications();

    application.setCoverLetter(request.getFormData().getCoverLetter());
    application.setCv(request.getFormData().getCv());
    
    applicationRepository.save(application);

    
  }
}
