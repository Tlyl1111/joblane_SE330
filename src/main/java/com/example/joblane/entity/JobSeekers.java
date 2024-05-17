package com.example.joblane.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "jobseekers")
public class JobSeekers {
    @Id
    private String id;
    private String DoB;
    private String KeyAcc;
    private String Address;
    private String Bio;
    private String CV;
    @DBRef
    private Users userId;

    // @DBRef
    // private CV CVId;
    // getters and setters...
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDoB() {
        return DoB;
    }

    public void setDoB(String doB) {
        DoB = doB;
    }

    public String getKeyAcc() {
        return KeyAcc;
    }

    public void setKeyAcc(String keyAcc) {
        KeyAcc = keyAcc;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getBio() {
        return Bio;
    }

    public void setBio(String bio) {
        Bio = bio;
    }

    public String getCV() {
        return CV;
    }

    public void setCV(String cV) {
        CV = cV;
    }

    public Users getUserId() {
        return userId;
    }

    public void setUserId(Users userId) {
        this.userId = userId;
    }
}