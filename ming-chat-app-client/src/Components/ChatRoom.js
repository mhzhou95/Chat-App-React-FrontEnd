import React, { useState, useEffect } from 'react';
import Message from './Message';
import { sendMessage } from '../Services/MessageService';
import { addMessage} from '../Services/ChatRoomService';
import $ from 'jquery';

const ChatRoom = (props) => {
  const initialStateMessage = {
    text: "",
    userId: "",
    userDisplayName: ""
  }
  const user = props.user;
  const [ message, setMessage ] = useState(initialStateMessage);

  let checkbottom;
  $(function() {
  $('.chat-box').on('scroll', function() {
      var check = $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight;
      if(check) {
        checkbottom = "bottom";
      }
      else {
      checkbottom = "nobottom";
      }
  })
  });
  window.setInterval(function(){
  if (checkbottom === "bottom") {
  var objDiv = document.getElementById("chat_con");
  objDiv.scrollTop = objDiv.scrollHeight;
  }
  }, 500);

  const messageSend = (event) => {
    event.preventDefault();
    setMessage( {
      text: event.target.message.value,
      userId: user.id,
      userDisplayName: user.displayName
    })
    event.target.message.value = "";
  }

  // useEffect( ()=> {
  //   props.chatroom.messages.sort( (a,b) => {return moment(a.time).format("x")-moment(b.time).format("x")})
  // }, [])

  useEffect(() => {
      const abortController = new AbortController();
      if( message.text.length > 0 && message.userId.length > 0 && user.authenticated){
      sendMessage(message)
      .then( data => addMessage(props.chatroom.id, data))
      .then( ()=> setMessage(initialStateMessage))
      }
      return function cleanup(){
        abortController.abort()
      }
          // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

   return (
    <div className="card flex-grow-1">
      <p className="card-header">Chatroom: {props.chatroom.name} </p>
      <div className="chat-box card-body" id="chat_con">
        {
         props.chatroom.messages.map( (message) => <Message key={message.id} message ={message} user={user}/> )
        } 
      </div>
      <p></p>
      <form className="input-group mb3" onSubmit ={ messageSend }>
        <input className="chat-message form-control" type="text" name="message"></input>
        <button type="submit" className="btn btn-dark input-group-append">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
