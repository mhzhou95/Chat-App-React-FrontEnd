import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import  Sidebar  from './Sidebar';
import { getChatRoom } from '../Services/ChatRoomService';

const ChatRoomList = (props) => {
  const user = props.user;
  const initialState = [];
  const [chatrooms, setchatrooms] = useState(initialState);

  useEffect( ()=> {
    getChatRoom()
    .then( data => setchatrooms( data));
  }, [])
  
  useEffect(() => {
      setInterval( ()=> {
        getChatRoom()
        .then( data => setchatrooms(data))
      }, 10000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
    return (
    <div className='body'>
      { user.authenticated?  <Sidebar user={user} chatrooms={chatrooms} param={props}/> : <div></div>}
      { props.chatRoomId && user.authenticated ? <ChatRoom user={user} chatRoomId={props.chatRoomId} key={props.chatRoomId} /> : <p>Loading ...</p>}
    </div>
  );
}

export default ChatRoomList;
