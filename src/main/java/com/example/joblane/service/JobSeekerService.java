package com.example.joblane.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.joblane.entity.JobSeekers;
import com.example.joblane.entity.Users;
import com.example.joblane.model.mapper.ProfileUpdateRequest;
import com.example.joblane.repository.JobSeekerRepository;
import com.example.joblane.repository.UserRepository;

@Service
public class JobSeekerService {
    @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @Autowired
    private UserRepository userRepository;

    public void updateProfile(ProfileUpdateRequest request) {
        Users user = userRepository.findById(request.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));
        JobSeekers jobSeeker = jobSeekerRepository.findById(request.getJobseekerId()).orElseThrow(() -> new RuntimeException("Jobseeker not found"));

        user.setEmail(request.getFormData().getEmail());
        user.setName(request.getFormData().getFirstName() + " " + request.getFormData().getLastName());
        userRepository.save(user);

        System.out.println(request.getFormData().getEmail());
        System.out.println(request.getFormData().getAddress());
        System.out.println(request.getFormData().getBiography());
        System.out.println(request.getFormData().getBiography());

        jobSeeker.setBio(request.getFormData().getBiography());
        jobSeeker.setDoB(request.getFormData().getBirthday());
        jobSeeker.setAddress(request.getFormData().getAddress());
        jobSeeker.setPhone(request.getFormData().getPhone());
        jobSeekerRepository.save(jobSeeker);

        System.out.println(jobSeeker);
    }
}
