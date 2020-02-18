import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import  Sidebar  from './Sidebar';
import { getChatRoom, getCurrentChatRoom } from '../Services/ChatRoomService';

const ChatRoomList = (props) => {
  const user = props.user;
  const initialState = [];
  const [chatrooms, setchatrooms] = useState(initialState);
  const [chatroom, setChatRoom ] = useState({ id: null});
  useEffect( ()=> {
    getChatRoom()
    .then( data => setchatrooms( data));
  }, [])

  useEffect(() => {
    const abortController = new AbortController();
    if(user.authenticated === true){
      setInterval( ()=> {
        getChatRoom()
        .then( data => setchatrooms( ...chatrooms, data))
      }, 1000)
    };

    return function cleanup(){
      abortController.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setchatrooms, user.authenticated, props.chatRoomId] );
  
  useEffect( ()=> {
    const abortController = new AbortController();
    if(user.authenticated === true){
      getCurrentChatRoom(props.chatRoomId)
      .then( response => setChatRoom(response));
    }
    return function cleanup(){
      abortController.abort()
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatrooms, props.chatRoomId])

    return (
    <div className='body'>
      { user.authenticated?  <Sidebar user={user} chatrooms={chatrooms} param={props}/> : <div></div>}
      {/* {chatrooms ? chatrooms.map( (chatroom) => <ChatRoom key={chatroom.id} chatroom={chatroom} user={user}/>): <p> is Loading</p>} */}
      { chatroom.id && user.authenticated && chatrooms.length > 0 ? <ChatRoom user={user} chatroom={chatroom} /> : <p>Loading ...</p>}
    </div>
  );
}

export default ChatRoomList;
