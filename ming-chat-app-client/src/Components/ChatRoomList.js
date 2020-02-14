import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import  Sidebar  from './Sidebar';
import { getChatRoom, getCurrentChatRoom } from '../Services/ChatRoomService';

const ChatRoomList = (props) => {
  const user = props.user;
  const initialState = [];
  const [chatrooms, setchatrooms] = useState(initialState);
  const [chatroom, setChatRoom ] = useState({ id: null});

  useEffect(() => {
    const abortController = new AbortController();
    if(user.authenticated === true){
      setInterval( ()=> {
        getChatRoom()
        .then( data => setchatrooms(data))
      }, 1000)
    };

    return function cleanup(){
      abortController.abort()
    }
  }, [setchatrooms, user.authenticated, setChatRoom, props.chatRoomId] );
  
  useEffect( ()=> {
    const abortController = new AbortController();
    if(user.authenticated === true){
      getCurrentChatRoom(props.chatRoomId)
      .then( response => setChatRoom(response))
    }
    return function cleanup(){
      abortController.abort()
    }
  }, [chatrooms, props.chatRoomId, user.authenticated])

    return (
    <div className='body'>
      { user.authenticated?  <Sidebar user={user} chatrooms={chatrooms} param={props}/> : <div></div>}
      {/* {chatrooms ? chatrooms.map( (chatroom) => <ChatRoom key={chatroom.id} chatroom={chatroom} user={user}/>): <p> is Loading</p>} */}
      { chatroom.id && user.authenticated ? <ChatRoom user={user} chatroom={chatroom} /> : <p>Loading ...</p>}
    </div>
  );
}

export default ChatRoomList;
