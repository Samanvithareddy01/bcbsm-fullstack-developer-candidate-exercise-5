package com.bcbsm.emailservice.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class EmailRequest {

    private String fromEmailId;
    private String recipientEmailId;
    private MultipartFile attachmentFile;
    private String uploadUser;

    // Getters and setters
}
