package com.bcbsm.emailservice.controller;

import com.bcbsm.emailservice.dao.entity.EmailDetail;
import com.bcbsm.emailservice.dto.EmailRequest;
import com.bcbsm.emailservice.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/email")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public ResponseEntity<String> sendEmail(@ModelAttribute EmailRequest emailRequest) {

        emailService.sendEmail(emailRequest);

        return ResponseEntity.ok("Email sent and details saved successfully.");
    }

    @GetMapping
    public List<EmailDetail> getAllEmails() {
        return emailService.getAllEmails();
    }


}
