package com.github.mhzhou95.MingChatAppServer.controller;

import com.github.mhzhou95.MingChatAppServer.model.ChatRoom;
import com.github.mhzhou95.MingChatAppServer.model.Message;
import com.github.mhzhou95.MingChatAppServer.model.User;
import com.github.mhzhou95.MingChatAppServer.service.ChatroomService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/chatroom")
@Controller
public class ChatRoomController {
    private ChatroomService chatroomService;

    public ChatRoomController(ChatroomService chatroomService){

        this.chatroomService = chatroomService;
        ChatRoom chatroom = new ChatRoom();
        chatroom.setName("general");
        this.createChatRoom(chatroom);
    }

    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<?> createChatRoom(@RequestBody ChatRoom chatRoom){
        ChatRoom chatroom = chatroomService.createChatroom(chatRoom);
        ResponseEntity<?> responseCreate = new ResponseEntity<>(chatroom, HttpStatus.CREATED);
        return  responseCreate;
    }

    @CrossOrigin
    @GetMapping("/")
    public ResponseEntity<?> findAll(){
        Collection<ChatRoom> chatRooms = chatroomService.findAll();
        ResponseEntity<?> responeGetChatrooms = new ResponseEntity<>(chatRooms, HttpStatus.OK);
        return responeGetChatrooms;
    }
    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<?> getChatRoom(@PathVariable Long id){
        ChatRoom chatRoom = chatroomService.getChatroom(id);
        ResponseEntity<?> responseGet = new ResponseEntity<>(chatRoom, HttpStatus.OK);
        return  responseGet;
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<?> editName(@PathVariable Long id, @RequestBody ChatRoom chatroom){
        ChatRoom editChatRoom = chatroomService.editName(id, chatroom);
        ResponseEntity<?> responseEdit = new ResponseEntity<>(editChatRoom, HttpStatus.OK);
        return responseEdit;
    }
    @CrossOrigin
    @PostMapping("/{id}/users")
    public ResponseEntity<?> addUser(@PathVariable Long id, @RequestBody User user){
        User userToAdd = chatroomService.addUser(id, user);
        ResponseEntity<?> responseAddUser = new ResponseEntity<>(userToAdd, HttpStatus.OK);
        return responseAddUser;
    }

    @CrossOrigin
    @PostMapping("/{id}/messages")
    public  ResponseEntity<?> addMessage(@PathVariable Long id, @RequestBody Message message){
        Message messageToAdd = chatroomService.addMessage(id, message);
        ResponseEntity<?> responseAddMessage = new ResponseEntity<>(messageToAdd, HttpStatus.OK);
        return responseAddMessage;
    }
}
