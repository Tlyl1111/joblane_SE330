package com.example.joblane.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public void sendSubscriptionEmail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("your_admin_email@example.com"); // Set your admin email address
        message.setTo(email);
        message.setSubject("Subscription Confirmation");
        message.setText("Thank you for subscribing! You will now receive updates from our platform.");
        emailSender.send(message);
    }
}
