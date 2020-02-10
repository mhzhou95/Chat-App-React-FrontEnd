import React, { useState, useEffect } from 'react';
import Message from './Message';
import { sendMessage } from '../Services/MessageService';
import { addMessage} from '../Services/ChatRoomService';

const ChatRoom = (props) => {
  const initialStateMessage = {
    text: "",
    userId: "",
    userDisplayName: ""
  }
  const user = props.user;
  const [ message, setMessage ] = useState(initialStateMessage)

  const messageSend = (event) => {
    event.preventDefault();
    setMessage( {
      ...message,
      text: event.target.message.value,
      userId: user.id,
      userDisplayName: user.displayName
    })
    event.target.message.value = "";
    // setTimeout( ()=> {const messageBody = document.querySelector('.chat-box');
    // messageBody.scrollTop = messageBody.scrollHeight; }, 550) 
  }

  useEffect(() => {
      if( message.text.length > 0 && message.userId.length > 0 && user.authenticated){
      sendMessage(message)
      .then( data => addMessage(props.chatroom.id, data))
      .then( setMessage(initialStateMessage))
      }
      const messageBody = document.querySelector('.chat-box');
      messageBody.scrollTop = messageBody.scrollHeight;
  }, [message, props, initialStateMessage, user.authenticated]);

   return (
    <div>
      <p>Chatroom: {props.chatroom.name} </p>
      <div className="chat-box">
        {props.chatroom.messages.map( (message) => <Message key={message.id} message ={message} user={user}/>)}
      </div>
      <form onSubmit ={ messageSend }>
        <input className="chat-message" type="text" name="message"></input>
        <button>Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
