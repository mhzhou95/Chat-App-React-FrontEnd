package com.github.mhzhou95.MingChatAppServer.service;

import com.github.mhzhou95.MingChatAppServer.model.User;
import com.github.mhzhou95.MingChatAppServer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class UserService{
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Collection<User> findAll() {
        return userRepository.findAll();
    }

    public User findUser(String id){
        User user = userRepository.findById(id).get();
        return user;
    }

    public User createUser(User user) {
        Collection<User> users= userRepository.findAll();
        Boolean isTaken = false;
        for( User userToCheck : users){
            if(user.getUsername().equals(userToCheck.getUsername()) || user.getDisplayName().equals(userToCheck.getDisplayName())){
                isTaken = true;
                break;
            }
        }
        if(isTaken.equals(false)){
            userRepository.save(user);
            return user;
        }return null;
    }

    public User deleteUser(String id) {
        User userToDelete = findUser(id);
        userRepository.delete(userToDelete);
        return userToDelete;
    }

    public User editUser(String id, User user) {
        User userToUpdate = findUser(id);
        userToUpdate.setUsername(user.getUsername());
        userToUpdate.setDisplayName(user.getDisplayName());
        userToUpdate.setPassword(user.getPassword());
        userToUpdate.setChatRoom(user.getChatRoom());
        userRepository.save(userToUpdate);
        return  userToUpdate;
    }

    public User loginUser(User user) {
        User foundUser = userRepository.findByUsernameEqualsAndPasswordEquals(user.getUsername(), user.getPassword());
        return foundUser;
    }
}
