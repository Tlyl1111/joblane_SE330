package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.Admins;

public interface AdminRepository extends MongoRepository<Admins, String> {
    // Custom queries can be defined here...
}
