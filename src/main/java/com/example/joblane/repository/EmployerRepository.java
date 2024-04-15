package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.Employers;

public interface EmployerRepository extends MongoRepository<Employers, String> {
    // Custom queries can be defined here...
}
