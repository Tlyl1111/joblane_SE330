package com.example.joblane.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import com.example.joblane.entity.Admins;
import com.example.joblane.repository.AdminRepository;

public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin getAdminById(String id) {
        return AdminRepository.findById(id).orElse(null);
    }

    public List<Admins> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin updateAdmin(Admin admin) throws Exception {
        Admin existingAdmin = getAdminById(admin.getId());
        if (existingAdmin == null) {
            throw new Exception("Admin not found");
        }

        existingAdmin.setName(admin.getName());
        existingAdmin.setEmail(admin.getEmail());

        return AdminRepository.save(existingAdmin);
    }

    public void deleteAdmin(String id) throws Exception {
        Admin existingAdmin = getAdminById(id);
        if (existingAdmin == null) {
            throw new Exception("Admin not found");
        }

        adminRepository.delete(existingAdmin);
    }

    public Admin authenticate(String username, String password) throws Exception{
        Admin admin = adminRepository.findByUsername(username);
        if (admin != null)
            return admin;
        else throw new Exception("Invalid username");
        return adminRepository.findByUsernameAndPassword(username, password);
    }

}
