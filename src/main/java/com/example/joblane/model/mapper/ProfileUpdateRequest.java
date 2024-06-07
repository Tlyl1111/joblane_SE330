package com.example.joblane.model.mapper;

public class ProfileUpdateRequest {
    private String userId;
    private String jobseekerId;
    private FormData formData;

    // getters và setters

    public static class FormData {
        private String firstName;
        private String lastName;
        private String email;
        private String address;
        private String phone;
        private String Birthday;
        private String Biography;
        public String getFirstName() {
            return firstName;
        }
        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }
        public String getLastName() {
            return lastName;
        }
        public void setLastName(String lastName) {
            this.lastName = lastName;
        }
        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }
        public String getAddress() {
            return address;
        }
        public void setAddress(String address) {
            this.address = address;
        }
        public String getPhone() {
            return phone;
        }
        public void setPhone(String phone) {
            this.phone = phone;
        }
        public String getBirthday() {
            return Birthday;
        }
        public void setBirthday(String birthday) {
            Birthday = birthday;
        }
        public String getBiography() {
            return Biography;
        }
        public void setBiography(String biography) {
            Biography = biography;
        }

        // getters và setters
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getJobseekerId() {
        return jobseekerId;
    }

    public void setJobseekerId(String jobseekerId) {
        this.jobseekerId = jobseekerId;
    }

    public FormData getFormData() {
        return formData;
    }

    public void setFormData(FormData formData) {
        this.formData = formData;
    }
}
