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
    const abortController = new AbortController();
      setInterval( ()=> {
        getChatRoom()
        .then( data => setchatrooms(data))
      }, 500)
    return function cleanup(){
      abortController.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getChatRoom]);
  
  // useEffect( ()=> {
  //   const abortController = new AbortController();
  //         getCurrentChatRoom(props.chatRoomId)
  //         .then( response => setChatRoom( response));
  //   return function cleanup(){
  //     abortController.abort()
  //   }
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.chatRoomId, setChatRoom, getCurrentChatRoom])

    return (
    <div className='body'>
      { user.authenticated?  <Sidebar user={user} chatrooms={chatrooms} param={props}/> : <div></div>}
      { props.chatRoomId && user.authenticated && chatrooms.length > 0 ? <ChatRoom user={user} chatRoomId={props.chatRoomId} key={props.chatRoomId} /> : <p>Loading ...</p>}
    </div>
  );
}

export default ChatRoomList;
