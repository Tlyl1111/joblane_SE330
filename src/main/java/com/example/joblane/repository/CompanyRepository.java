package com.example.joblane.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.joblane.entity.Companies;

public interface CompanyRepository extends MongoRepository<Companies, String> {

}
