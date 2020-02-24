package com.github.mhzhou95.MingChatAppServer.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.File;
import java.util.UUID;

@Entity
public class User {
    @Id
    private final String id = UUID.randomUUID().toString().replace("-", "");
    @Column(unique = true) @NotEmpty
    private String username;
    @NotEmpty
    private String password;
    @Column(unique = true) @NotEmpty
    private String displayName;
    private File image = null;
    @ManyToOne(fetch = FetchType.LAZY)
    private ChatRoom chatRoom;
    private boolean authenticated = true;

    public boolean isAuthenticated() {
        return authenticated;
    }

    public ChatRoom getChatRoom() {
        return chatRoom;
    }

    public void setChatRoom(ChatRoom chatRoom) {
        this.chatRoom = chatRoom;
    }

    public User() {
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public File getImage() {
        return image;
    }

    public void setImage(File image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", displayName='" + displayName + '\'' +
                '}';
    }
}
