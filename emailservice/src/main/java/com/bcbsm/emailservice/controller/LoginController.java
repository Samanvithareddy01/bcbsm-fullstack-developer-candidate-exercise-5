package com.bcbsm.emailservice.controller;

import com.bcbsm.emailservice.dto.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @PostMapping("/api/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {

        if ("user".equals(loginRequest.getUsername()) &&
                "pwd".equals(loginRequest.getPassword())) {
            return ResponseEntity.ok( "OK");
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
