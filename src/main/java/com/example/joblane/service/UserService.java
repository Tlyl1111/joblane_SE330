package com.example.joblane.service;

import com.example.joblane.entity.Users;
import com.example.joblane.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public boolean validateUser(String email, String password) {
        Users user = userRepository.findByEmail(email);
        System.out.println("Fetched User: " + user);
        if (user != null && user.getPassword().equals(password)) {
            System.out.println("User validated successfully");
            return true;
        } else {
            System.out.println("User validation failed");
            return false;
        }
    }

    public Users findById(String id) throws UserNotFoundException {
        Optional<Users> userOptional = userRepository.findById(id);
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException("User not found");
        } else {
            return userOptional.get();
        }
    }

    public void deactivateUser(String id) throws UserNotFoundException {
        Users user = findById(id);
        user.setActive(false);
        userRepository.save(user);
    }

    public class UserNotFoundException extends RuntimeException {

        public UserNotFoundException(String message) {
            super(message);
        }
    }
}
