package com.github.mhzhou95.MingChatAppServer.controller;

import com.github.mhzhou95.MingChatAppServer.model.User;
import com.github.mhzhou95.MingChatAppServer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequestMapping("/api/users")
@RestController
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @CrossOrigin
    @GetMapping("/")
    public ResponseEntity<?> findAll(){
        Collection<User> allUsers = userService.findAll();
        ResponseEntity<?> responseAllUsers = new ResponseEntity<>(allUsers, HttpStatus.OK);
        return responseAllUsers;
    }

    @CrossOrigin
    @PostMapping("/")
    public ResponseEntity<?> createUser(@RequestBody User user){
        User newUser = userService.createUser(user);
        ResponseEntity<?> responseCreate = new ResponseEntity<>( newUser, HttpStatus.CREATED);
        return responseCreate;
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<?> findUser(@PathVariable String id){
        User getUser = userService.findUser(id);
        ResponseEntity<?> responseGet = new ResponseEntity<>( getUser, HttpStatus.OK);
        return responseGet;
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<?> editUser(@PathVariable String id, @RequestBody User user){
        User editedUser = userService.editUser(id, user);
        ResponseEntity<?> responseEdit = new ResponseEntity<>(editedUser, HttpStatus.OK);
        return  responseEdit;
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable String id){
        User deleteUser = userService.deleteUser(id);
        ResponseEntity<?> responseDelete = new ResponseEntity<>( deleteUser, HttpStatus.OK);
        return responseDelete;
    }

}

