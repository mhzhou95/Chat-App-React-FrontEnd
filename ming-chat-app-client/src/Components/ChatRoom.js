import React, { useState, useEffect } from 'react';
import Message from './Message';
import { getAllMessages, createMessage } from '../Services/MessageService';
import { getCurrentChatRoom } from '../Services/ChatRoomService';
import $ from 'jquery';

const ChatRoom = (props) => {
  const initialStateMessage = {
    text: "",
    userId: "",
    userDisplayName: ""
  }

  const initialStateChatRoom = {
    id: "",
    name: "",
    makerId: ""
  }
  const user = props.user;
  const [ chatRoom, setChatRoom ] = useState(initialStateChatRoom);
  const [ message, setMessage ] = useState(initialStateMessage);
  const [ messageList, setMessageList] = useState(getAllMessages(props.chatRoomId));

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

  useEffect(()=>{
      setInterval(()=>{
        getAllMessages(props.chatRoomId)
        .then(data => setMessageList(data));
      }, 500)
  }, [props.chatRoomId])
 
  useEffect(()=> {
    getCurrentChatRoom(props.chatRoomId)
    .then(data => setChatRoom(data))
  }, [props])
  
  const messageSend = (event) => {
    event.preventDefault();
    setMessage( {
      send : true,
      text: event.target.message.value,
      userId: user.id,
      userDisplayName: user.displayName
    })
    event.target.message.value = "";
  }

  useEffect(() => {
      if( message.text.length >=1 && message.userId.length >=1){
        createMessage( chatRoom.id, message)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

   return (
    
       <div className="card flex-grow-1">
        <p className="card-header">Chatroom: {chatRoom.name} </p>
        <div className="chat-box card-body" id="chat_con">
          {
            messageList.length > 0  && messageList.map( (message) => <Message key={message.id} message ={message} user={user}/>)
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
