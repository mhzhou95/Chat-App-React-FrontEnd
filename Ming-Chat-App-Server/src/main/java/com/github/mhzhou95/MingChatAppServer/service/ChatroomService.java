package com.github.mhzhou95.MingChatAppServer.service;

import com.github.mhzhou95.MingChatAppServer.model.ChatRoom;
import com.github.mhzhou95.MingChatAppServer.model.Message;
import com.github.mhzhou95.MingChatAppServer.model.User;
import com.github.mhzhou95.MingChatAppServer.repository.ChatroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class ChatroomService {
    private ChatroomRepository chatroomRepository;
    private MessageService messageService;
    private UserService userService;

    @Autowired
    public ChatroomService(ChatroomRepository chatroomRepository, MessageService messageService, UserService userService){
        this.chatroomRepository = chatroomRepository;
        this.messageService = messageService;
        this.userService = userService;
    }


    public ChatRoom getChatroom(Long id) {
        ChatRoom chatroom = chatroomRepository.findById(id).get();
        return chatroom;
    }

    public ChatRoom createChatroom(ChatRoom chatRoom){
        Collection<ChatRoom> chatrooms = this.findAll();
        Boolean isTaken = false;
        for(ChatRoom chatroom : chatrooms ) {
            if (chatroom.getName().equals(chatRoom.getName()) ){
                isTaken=true;
                break;
            }
        }
        if(isTaken.equals(false)) {
            chatroomRepository.save(chatRoom);
            return chatRoom;
        }return null;
    }

    public Collection<ChatRoom> findAll() {
        Collection<ChatRoom> chatrooms = chatroomRepository.findAll();
        return chatrooms;
    }


    public User addUser(Long id, User user) {
        ChatRoom chatroom = getChatroom(id);
        user.setChatRoomId(id);
        String tempId = user.getId();
        userService.editUser(user.getId(), user);
        User newUser = userService.findUser(tempId);
        chatroom.addUser(newUser);
        chatroomRepository.save(chatroom);
        return newUser;
    }

    public Message addMessage(Long id, Message message){
        ChatRoom chatroom = getChatroom(id);
        message.setChatRoomId(id);
        Long tempId = message.getId();
        messageService.editMessage(message.getId(), message);
        Message newMessage = messageService.getMessage(tempId);
        chatroom.addMessage(newMessage);
        chatroomRepository.save(chatroom);
        return newMessage;
    }
    public ChatRoom editName(Long id, ChatRoom chatroom) {
        ChatRoom chatroomToUpdate = getChatroom(id);
        chatroomToUpdate.setName(chatroom.getName());
        chatroomRepository.save(chatroomToUpdate);
        return chatroomToUpdate;
    }
}
