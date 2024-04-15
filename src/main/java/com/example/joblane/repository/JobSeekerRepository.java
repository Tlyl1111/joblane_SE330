package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.JobSeekers;

public interface JobSeekerRepository extends MongoRepository<JobSeekers, String> {
    // Custom queries can be defined here...
}
