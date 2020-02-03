import React from 'react';
import Message from './Message';

const ChatRoom = (props) => {
  console.log(props);
  return (
    <div>
      <p>Chatroom id: {props.chatroom.id}</p>
      <p>Chatroom name: {props.chatroom.name} </p>
      <p> Chatroom messages: {props.chatroom.messages.map( (message) => <Message message ={message} />)} </p>
    </div>
  );
}

export default ChatRoom;
