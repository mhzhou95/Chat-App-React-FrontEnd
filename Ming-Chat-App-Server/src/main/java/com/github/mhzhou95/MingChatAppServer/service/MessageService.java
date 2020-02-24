package com.github.mhzhou95.MingChatAppServer.service;


import com.github.mhzhou95.MingChatAppServer.model.Message;
import com.github.mhzhou95.MingChatAppServer.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class MessageService {
    private MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository){
        this.messageRepository = messageRepository;
    }

    public Collection<Message> findAll() {
        return messageRepository.findAll();
    }

    public Message getMessage(Long id) {
        Message message = messageRepository.findById(id).get();
        return message;
    }

    public Message createMessage(Message message) {
        if(message.getUserId().length() > 0 && message.getText().length() >0) {
            Message newMessage = messageRepository.save(message);
            return newMessage;
        }
        return null;
    }

    public Message deleteMessage(Long id) {
        Message messageToDelete = messageRepository.findById(id).get();
        messageRepository.deleteById(id);
        return messageToDelete;
    }

    public Message editMessage(Long id, Message message) {
        Message messageToEdit = getMessage(id);
        messageToEdit.setText(message.getText());
        messageToEdit.setChatRoom(message.getChatRoom());
        messageRepository.save(messageToEdit);
        return messageToEdit;
    }


}
