import React from 'react';
import { NavLink } from 'react-router-dom';
import { createChatRoom } from '../Services/ChatRoomService';

const Sidebar = (props) => {
  const createNewChatRoom = () => {
    let data = { name: ""}
    data.name = prompt("Create a new room (Has to be unique name)");
    createChatRoom(data)
  }
  return (
    <div className='sidebar'>
      <p>ChatRooms</p>
      <button onClick={createNewChatRoom}>New ChatRoom</button>
      <ul>
        { props.chatrooms.map( chatroom => <li key={chatroom.id}><NavLink to={`/${chatroom.id}`}>{chatroom.name}</NavLink></li> ) } 
      </ul>
    </div>
  );
}

export default Sidebar;
