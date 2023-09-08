package com.bcbsm.emailservice.service;

import com.bcbsm.emailservice.dto.EmailRequest;
import com.bcbsm.emailservice.dao.entity.EmailDetail;
import com.bcbsm.emailservice.dao.repository.EmailDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@Service
public class EmailService {

    @Autowired
    private EmailDetailRepository emailDetailRepository;

    public void sendEmail(EmailRequest emailRequest) {
        try {

            String fromEmailId = emailRequest.getFromEmailId();
            String recipientEmailId = emailRequest.getRecipientEmailId();
            String uploadUser = emailRequest.getUploadUser();
            MultipartFile attachmentFile = emailRequest.getAttachmentFile();

            EmailDetail emailDetail = new EmailDetail();
            emailDetail.setFromEmailId(fromEmailId);
            emailDetail.setRecipientEmailId(recipientEmailId);
            emailDetail.setAttachmentFileName(attachmentFile.getOriginalFilename());
            emailDetail.setAttachmentFile(attachmentFile.getBytes());
            emailDetail.setUploadUser(uploadUser);
            emailDetail.setUploadDate(new Date());

            emailDetailRepository.save(emailDetail);

        } catch (Exception e) {
        }
    }

    public List<EmailDetail> getAllEmails() {
        return emailDetailRepository.findAll();
    }

}

