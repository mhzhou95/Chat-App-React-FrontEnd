import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import { getChatRoom } from '../Services/ChatRoomService';

const ChatRoomList = (props) => {
  const user = props.user;
  const initialState= [];
  const [chatrooms, setchatrooms] = useState(initialState);

  useEffect(() => {
    getChatRoom().then( data => setchatrooms(data));
  }, [chatrooms] );

  return (
    <div>
      {chatrooms ? chatrooms.map( (chatroom) => <ChatRoom key={chatroom.id} chatroom={chatroom} user={user}/>): <p> is Loading</p>}
    </div>
  );
}

export default ChatRoomList;
