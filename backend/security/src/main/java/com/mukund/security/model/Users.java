package com.mukund.security.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
public class Users {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int userid;
    private String username;
    private String password;

    public Users() { //Necessary for Spring security's authManager to work properly
    }

    public Users(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public int getId() {
        return userid;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setId(int id) {
        this.userid = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + userid +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
