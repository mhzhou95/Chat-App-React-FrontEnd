package com.github.mhzhou95.MingChatAppServer.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.File;
import java.util.Date;

@Entity
public class Message {

    @Id @GeneratedValue( strategy = GenerationType.AUTO) private Long id;
    @NotEmpty
    private String text;
    private Date time = new Date();
    private File image;
    @NotEmpty
    private String userId;
    @NotEmpty
    private String userDisplayName;
    private Long chatRoomId;

    public Message(){
    }

    public Long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public File getImage() {
        return image;
    }

    public void setImage(File image) {
        this.image = image;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserDisplayName() {
        return userDisplayName;
    }

    public void setUserDisplayName(String userDisplayName) {
        this.userDisplayName = userDisplayName;
    }

    public Long getChatRoomId() {
        return chatRoomId;
    }

    public void setChatRoomId(Long chatRoomId) {
        this.chatRoomId = chatRoomId;
    }
}
