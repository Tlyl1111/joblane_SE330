package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.Users;

public interface UserRepository extends MongoRepository<Users, String> {
}
