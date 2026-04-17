package com.codingexample.firstProject.controller;

import com.codingexample.firstProject.security.JwtUtil;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class ProtectedController {

    @GetMapping("/protected")
    public String getProtectedData(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new RuntimeException("Unauthorized");
        }

        String token = authHeader.substring(7);
        // validate token, will throw exception if invalid
        String username = JwtUtil.extractUsername(token);

        return "Secure data accessed by: " + username;
    }
}
