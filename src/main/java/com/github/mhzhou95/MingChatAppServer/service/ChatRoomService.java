package com.github.mhzhou95.MingChatAppServer.service;

import com.github.mhzhou95.MingChatAppServer.model.ChatRoom;
import com.github.mhzhou95.MingChatAppServer.model.Message;
import com.github.mhzhou95.MingChatAppServer.model.User;
import com.github.mhzhou95.MingChatAppServer.repository.ChatroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Stream;

@Service
public class ChatRoomService {
    private ChatroomRepository chatroomRepository;
    private MessageService messageService;
    private UserService userService;

    @Autowired
    public ChatRoomService(ChatroomRepository chatroomRepository, MessageService messageService, UserService userService){
        this.chatroomRepository = chatroomRepository;
        this.messageService = messageService;
        this.userService = userService;
    }

    public ChatRoom getChatRoom(Long id) {
        ChatRoom chatRoom = chatroomRepository.findById(id).get();
//        chatRoom.sortMessages();
        return chatRoom;
    }

    public ChatRoom createChatRoom(ChatRoom newChatRoom){
        Collection<ChatRoom> chatRooms = this.findAll();
        Boolean isTaken = false;
        for(ChatRoom chatroom : chatRooms ) {
            if (chatroom.getName().equals(newChatRoom.getName()) ){
                isTaken=true;
                break;
            }
        }
        if(isTaken.equals(false)) {
            chatroomRepository.save(newChatRoom);
            return newChatRoom;
        }return null;
    }

    public Collection<ChatRoom> findAll() {
        Collection<ChatRoom> chatRooms = chatroomRepository.findAll();
        chatRooms.forEach( chatRoom -> chatRoom.sortMessages());
        return chatRooms;
    }

    public User addUser(Long id, User user) {
        ChatRoom chatRoom = getChatRoom(id);
        user.setChatRoomId(id);
        String tempId = user.getId();
        userService.editUser(user.getId(), user);
        User newUser = userService.findUser(tempId);
        chatRoom.addUser(newUser);
        chatroomRepository.save(chatRoom);
        return newUser;
    }

    public Message addMessage(Long id, Message message){
        ChatRoom chatRoom = getChatRoom(id);
        message.setChatRoomId(id);
        Long tempId = message.getId();
        messageService.editMessage(message.getId(), message);
        Message newMessage = messageService.getMessage(tempId);
        chatRoom.addMessage(newMessage);
        chatroomRepository.save(chatRoom);
        return newMessage;
    }
    public ChatRoom editName(Long id, ChatRoom chatroom) {
        ChatRoom chatRoomToUpdate = getChatRoom(id);
        chatRoomToUpdate.setName(chatroom.getName());
        chatroomRepository.save(chatRoomToUpdate);
        return chatRoomToUpdate;
    }

    public Message deleteMessage(Long id, Long mId) {
        ChatRoom chatRoom = getChatRoom(id);
        Message message = messageService.getMessage(mId);
        chatRoom.deleteMessage(message);
        messageService.deleteMessage(mId);
        chatroomRepository.save(chatRoom);
        return message;
    }

    public ChatRoom delete(Long id) {
        ChatRoom chatRoom = chatroomRepository.findById(id).get();
        chatroomRepository.delete(chatRoom);
        return chatRoom;
    }
}
