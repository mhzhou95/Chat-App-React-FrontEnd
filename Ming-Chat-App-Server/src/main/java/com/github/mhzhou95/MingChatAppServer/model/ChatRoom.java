package com.github.mhzhou95.MingChatAppServer.model;

import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Entity
public class ChatRoom {
    @Id @GeneratedValue( strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true) @NotEmpty
    private String name;
    @OneToMany
    private List<User> users;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Message> messages;

    public ChatRoom() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Message> getMessages() {
        return messages;
    }

    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    public User addUser(User user){
        users.add(user);
        return user;
    };

    public Message addMessage(Message message) {
        messages.add(message);
        return message;
    };

    public Message deleteMessage(Message message){
        messages.remove(message);
        return message;
    }
}
