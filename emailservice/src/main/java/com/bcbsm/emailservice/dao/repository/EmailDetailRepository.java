package com.bcbsm.emailservice.dao.repository;

import com.bcbsm.emailservice.dao.entity.EmailDetail;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmailDetailRepository extends MongoRepository<EmailDetail, String> {
}
