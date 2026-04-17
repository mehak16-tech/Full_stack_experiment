package com.codingexample.firstProject.auth;

import com.codingexample.firstProject.security.JwtUtil;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> user) {

        String username = user.get("username");
        String password = user.get("password");

        if (username.equals("admin") && password.equals("admin123")) {
            String token = JwtUtil.generateToken(username);
            return Map.of("token", token);
        } else if (username.equals("user") && password.equals("user123")) {
            String token = JwtUtil.generateToken(username);
            return Map.of("token", token);
        }

        throw new RuntimeException("Invalid credentials");
    }
}