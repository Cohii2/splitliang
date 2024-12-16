package com.mukund.security.config;

import com.mukund.security.service.JWTService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomOAuth2SuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private JWTService jwtService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        // Extract user details (e.g., email, roles)
        String email = oAuth2User.getAttribute("email"); // Assuming email is part of OAuth2 response

        // Generate a JWT for the authenticated user
        String jwtToken = jwtService.generateToken(email);

        // Redirect user to the frontend with the JWT as a query parameter
//        String redirectUrl = "https://your-frontend.com/dashboard?token=" + jwtToken;
        response.sendRedirect(jwtToken);
    }
}
