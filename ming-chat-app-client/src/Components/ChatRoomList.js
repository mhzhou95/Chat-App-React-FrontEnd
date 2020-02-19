import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import  Sidebar  from './Sidebar';
import { getChatRoom, getCurrentChatRoom } from '../Services/ChatRoomService';

const ChatRoomList = (props) => {
  const user = props.user;
  const initialState = [];
  const [chatrooms, setchatrooms] = useState(initialState);
  const [chatroom, setChatRoom ] = useState({});

  useEffect( ()=> {
    getChatRoom()
    .then( data => setchatrooms( data));
  }, [])
  

  // useEffect(() => {
  //   const abortController = new AbortController();
  //     setInterval( ()=> {
  //       getChatRoom()
  //       .then( data => setchatrooms(data))
  //     }, 1000)
  //     console.log("here")
  //   return function cleanup(){
  //     abortController.abort()
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [getChatRoom]);
  
  useEffect( ()=> {
    const abortController = new AbortController();
        setInterval( async()=> { 
          await getCurrentChatRoom(props.chatRoomId)
          .then( response => setChatRoom( response));
        }, 1000)
        
    return function cleanup(){
      abortController.abort()
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.chatRoomId])

    return (
    <div className='body'>
      { user.authenticated?  <Sidebar user={user} chatrooms={chatrooms} param={props}/> : <div></div>}
      { chatroom.id && user.authenticated && chatrooms.length > 0 ? <ChatRoom user={user} chatroom={chatroom} key={chatroom.id} /> : <p>Loading ...</p>}
    </div>
  );
}

export default ChatRoomList;
