import React, { useState, useEffect } from 'react';
import Message from './Message';
import { sendMessage } from '../Services/MessageService';
import { addMessage } from '../Services/ChatRoomService';

const ChatRoom = (props) => {
  const initialState = {
    text: "",
    userId: "",
    userDisplayName: ""
  }
  const user = props.user;
  const [ message, setMessage ] = useState(initialState)

  const messageSend = (event) => {
    event.preventDefault();
    setMessage( {
      ...message,
      text: event.target.message.value,
      userId: user.id,
      userDisplayName: user.userDisplayName
    })
    event.target.message.value = "";
  
    // // make scrollbar always start at bottom
    // setTimeout( ()=> {const messageBody = document.querySelector('.chat-box');
    // messageBody.scrollTop = messageBody.scrollHeight; }, 750) 
  }

  useEffect(() => {
      if( message.text.length > 0 && message.userId.length > 0 && user.authenticated){
      sendMessage(message)
      .then( data => addMessage(props.chatroom.id, data))
      .then( setMessage(initialState))
      }
  }, [message, props, initialState, user.authenticated]);

  useEffect(() => {
    setTimeout( ()=> {const messageBody = document.querySelector('.chat-box');
    messageBody.scrollTop = messageBody.scrollHeight; }, 750) 
  }, [props]);

   return (
    <div>
      <p>Chatroom id: {props.chatroom.id} </p>
      <p>Chatroom name: {props.chatroom.name} </p>
      <div className="chat-box">
        {props.chatroom.messages.map( (message) => <Message key={message.id} message ={message} />)}
      </div>
      <form onSubmit ={ messageSend }>
        <input type="text" name="message"></input>
        <button>Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
