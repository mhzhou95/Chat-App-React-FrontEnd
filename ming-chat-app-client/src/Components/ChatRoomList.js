import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import  Sidebar  from './Sidebar';
import { getChatRoom, getCurrentChatRoom } from '../Services/ChatRoomService';
import axios from 'axios';

const ChatRoomList = (props) => {
  const user = props.user;
  const initialState = [];
  const [chatrooms, setchatrooms] = useState(initialState);
  const [chatroom, setChatRoom ] = useState({ id: null});
  let boolean = false;

  setInterval( ()=> {boolean = !!boolean}, 500);
  console.log( boolean)
  useEffect(() => {
    const source = axios.CancelToken.source();
    if(user.authenticated === true){
      try{
          getChatRoom()
            .then( data => setchatrooms(data))
          getCurrentChatRoom(props.chatRoomId)
            .then( response => setChatRoom(response))
      }
      catch{
        console.log("no change")
      }
    };
    return () => {
      source.cancel();
    };
  }, [setchatrooms, user.authenticated, setChatRoom, props.chatRoomId, boolean] );
  
    return (
    <div className='body'>
      { user.authenticated?  <Sidebar user={user} chatrooms={chatrooms}/> : <div></div>}
      {/* {chatrooms ? chatrooms.map( (chatroom) => <ChatRoom key={chatroom.id} chatroom={chatroom} user={user}/>): <p> is Loading</p>} */}
      { chatroom.id ? <ChatRoom user={user} chatroom={chatroom} /> : <p>Loading ...</p>}
    </div>
  );
}

export default ChatRoomList;
