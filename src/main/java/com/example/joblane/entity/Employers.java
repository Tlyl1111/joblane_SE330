package com.example.joblane.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "employers")
public class Employers {
    @Id
    private String id;
    private String CompanyName;
    private String CompanyEmail;
    private String CompanyPhone;
    private String CompanyWebsite;
    private String CompanyLogo;
    private String CompanyDescription;
    private String CompanyLocation;
    private String CompanyGoal;
    @DBRef
    private Users userId;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCompanyName() {
        return CompanyName;
    }

    public void setCompanyName(String companyName) {
        CompanyName = companyName;
    }

    public String getCompanyEmail() {
        return CompanyEmail;
    }

    public void setCompanyEmail(String companyEmail) {
        CompanyEmail = companyEmail;
    }

    public String getCompanyPhone() {
        return CompanyPhone;
    }

    public void setCompanyPhone(String companyPhone) {
        CompanyPhone = companyPhone;
    }

    public String getCompanyWebsite() {
        return CompanyWebsite;
    }

    public void setCompanyWebsite(String companyWebsite) {
        CompanyWebsite = companyWebsite;
    }

    public String getCompanyLogo() {
        return CompanyLogo;
    }

    public void setCompanyLogo(String companyLogo) {
        CompanyLogo = companyLogo;
    }

    public String getCompanyDescription() {
        return CompanyDescription;
    }

    public void setCompanyDescription(String companyDescription) {
        CompanyDescription = companyDescription;
    }

    public String getCompanyLocation() {
        return CompanyLocation;
    }

    public void setCompanyLocation(String companyLocation) {
        CompanyLocation = companyLocation;
    }

    public String getCompanyGoal() {
        return CompanyGoal;
    }

    public void setCompanyGoal(String companyGoal) {
        CompanyGoal = companyGoal;
    }

    public Users getUserId() {
        return userId;
    }

    public void setUserId(Users userId) {
        this.userId = userId;
    }

    public Employers() {

    }
}
