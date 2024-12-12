package com.mukund.security.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String greet(HttpServletRequest req){
        return "Welcome past the gates Mukund! your session ID is" + req.getSession().getId();
    }
}
