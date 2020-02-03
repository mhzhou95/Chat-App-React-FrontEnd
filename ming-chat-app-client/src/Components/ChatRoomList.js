import React, { useState, useEffect } from 'react';
import ChatRoom from './ChatRoom';
import { getChatRoom } from '../Services/ChatRoomService';

const ChatRoomList = () => {
  const initialState= [];
  const [chatrooms, setchatrooms] = useState(initialState);

  useEffect(() => {
    getChatRoom().then( data => setchatrooms(data));
  }, [setchatrooms] );

  return (
    <div>
      {chatrooms ? chatrooms.map( (chatroom) => <ChatRoom key={chatroom.id} chatroom={chatroom}/>): <p> is Loading</p>}
    </div>
  );
}

export default ChatRoomList;
