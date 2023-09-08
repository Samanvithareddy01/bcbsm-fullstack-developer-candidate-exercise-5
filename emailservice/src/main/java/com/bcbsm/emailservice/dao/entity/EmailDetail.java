package com.bcbsm.emailservice.dao.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Document(collection = "user-email")
public class EmailDetail {

    @Id
    private String id;
    private String fromEmailId;
    private String recipientEmailId;
    private String attachmentFileName;
    private byte[] attachmentFile;
    private String uploadUser;
    private Date uploadDate;

    // Constructors, getters, and setters
}

