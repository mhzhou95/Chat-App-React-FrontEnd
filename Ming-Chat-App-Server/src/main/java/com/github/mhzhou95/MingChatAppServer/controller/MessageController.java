package com.github.mhzhou95.MingChatAppServer.controller;

import com.github.mhzhou95.MingChatAppServer.model.Message;
import com.github.mhzhou95.MingChatAppServer.model.User;
import com.github.mhzhou95.MingChatAppServer.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping(value = "/message")
@Controller
public class MessageController {
    private MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService){
        this.messageService= messageService;
    }

    @CrossOrigin
    @GetMapping("/")
    public ResponseEntity<?> findAll(){
        Collection<Message> allMessages = messageService.findAll();
        ResponseEntity<?> responseAllMessages = new ResponseEntity<>(allMessages, HttpStatus.OK);
        return responseAllMessages;
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<?> findMessage(@PathVariable Long id){
        Message message = messageService.getMessage(id);
        ResponseEntity<?> responseGetMessage = new ResponseEntity<>(message, HttpStatus.OK);
        return responseGetMessage;
    }

    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<?> createMessage(@RequestBody Message message){
        Message newMessage = messageService.createMessage(message);
        ResponseEntity<?> responseCreate = new ResponseEntity<>(newMessage, HttpStatus.CREATED);
        return responseCreate;
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long id){
        Message deleteMessage = messageService.deleteMessage(id);
        ResponseEntity<?> responseDelete = new ResponseEntity<>(deleteMessage, HttpStatus.OK);
        return  responseDelete;
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<?> editMessage(@PathVariable Long id, @RequestBody Message message){
        Message editMessage = messageService.editMessage(id, message);
        ResponseEntity<?> responseEdit = new ResponseEntity<>(editMessage, HttpStatus.OK);
        return responseEdit;
    }
}
