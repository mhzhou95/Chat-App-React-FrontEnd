import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import { getChatRoom } from '../Services/ChatRoomService';

const ChatRoomList = (props) => {
  const user = props.user;
  const initialState= [];
  const [chatrooms, setchatrooms] = useState(initialState);

  useEffect(() => {
    if(user.authenticated === true){
     setInterval( ()=> { getChatRoom().then( data => setchatrooms(data)); 
     }, 500)
    }
  }, [setchatrooms, user.authenticated] );

    return (
    <div>
      {chatrooms ? chatrooms.map( (chatroom) => <ChatRoom key={chatroom.id} chatroom={chatroom} user={user}/>): <p> is Loading</p>}
    </div>
  );
}

export default ChatRoomList;
