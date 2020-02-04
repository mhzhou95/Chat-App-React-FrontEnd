import React, { useState, useEffect } from 'react';
import Message from './Message';
import { sendMessage } from '../Services/MessageService';

const ChatRoom = (props) => {
  const user = props.user;
  const [ message, setMessage ] = useState({
    text: "",
    userId: ""
  })

  console.log(user);
  const messageSend = (event) => {
    event.preventDefault();
    setMessage( {
      ...message,
      text: event.target.message.value,
      userId: user.id
    })
  }
  useEffect(() => {
    if( message.text.length > 0 && message.userId.length > 0 ){
      sendMessage(message)
      }
  }, [message]);
  return (
    <div>
      <p>Chatroom id: {props.chatroom.id}</p>
      <p>Chatroom name: {props.chatroom.name} </p>
      Chatroom messages: {props.chatroom.messages.map( (message) => <Message key={message.id} message ={message} />)}

      <form onSubmit ={ messageSend }>
        <input type="text" name="message"></input>
        <button>Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
