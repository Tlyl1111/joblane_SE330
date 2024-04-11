package com.example.joblane.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "Users")
public class Users {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private String role;
    private boolean googleLinked;
    private List<String> cvs;
    private List<String> favoritePosts;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public boolean isGoogleLinked() {
        return googleLinked;
    }

    public void setGoogleLinked(boolean googleLinked) {
        this.googleLinked = googleLinked;
    }

    public List<String> getCvs() {
        return cvs;
    }

    public void setCvs(List<String> cvs) {
        this.cvs = cvs;
    }

    public List<String> getFavoritePosts() {
        return favoritePosts;
    }

    public void setFavoritePosts(List<String> favoritePosts) {
        this.favoritePosts = favoritePosts;
    }

    public Users() {
    }

}
