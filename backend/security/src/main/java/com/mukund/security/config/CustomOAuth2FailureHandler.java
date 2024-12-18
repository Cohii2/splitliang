package com.mukund.security.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomOAuth2FailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        // Log the error for debugging
        System.err.println("OAuth2 authentication failed: " + exception.getMessage());

        // Redirect the user back to the OAuth2 login page (retry)
        response.sendRedirect("/oauth2/authorization/google");

        // Alternatively, redirect to a custom error page
        // response.sendRedirect("/error/oauth2?error=" + exception.getMessage());
    }
}
