import React, { Fragment } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { createChatRoom, deleteChatRoom } from '../Services/ChatRoomService';

const Sidebar = (props) => {
  const history = useHistory();
  const handleCreateChatRoom = () => {
    let data = { 
      name: "",
      makerId: ""
    }
    data.name = prompt("Create a new room (Has to be unique name)");
    data.makerId = props.user.id;
    createChatRoom(data)
  }
  const handleDeleteChatRoom = (event) => {
    event.preventDefault();
      deleteChatRoom(event.target.value, props.user.id)
      history.push("/1");
  }

  return (
    <div className='sidebar'>
      <p>ChatRooms</p>
      <button onClick={ handleCreateChatRoom} className="btn btn-outline-dark btn-sm">New ChatRoom</button>
      <p></p>
        <ul className="nav flex-column">
          { props.chatrooms && props.chatrooms.map( 
            chatroom => 
                <li className="input-group mb-3 nav-item" key={chatroom.id}>
                  <NavLink className="nav-link form-control" to={`/${chatroom.id}`}>{chatroom.name}</NavLink>
                  { props.user.id === chatroom.makerId ? <button onClick={ handleDeleteChatRoom } value={chatroom.id} className="btn btn-info btn-sm input-group-append">X</button>:<Fragment></Fragment>}
                </li> 
          ) } 
        </ul>
    </div>
  );
}

export default Sidebar;
