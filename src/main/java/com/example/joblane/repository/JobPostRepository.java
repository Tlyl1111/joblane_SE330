package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.JobPosts;

public  interface JobPostRepository extends MongoRepository<JobPosts, String>{
    
}
