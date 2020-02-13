import React from 'react';
import { deleteMessage} from '../Services/ChatRoomService';

const Message = (props) => {
  const handleDelete = () => {
    deleteMessage(props.message.chatRoomId, props.message.id)
  }

  return (
    <div className="input-group mb-3 input-group-sm">
    <p className="form-control">{props.message.userDisplayName}: {props.message.text} </p> 
      {props.user.id === props.message.userId && <button className="btn btn-danger btn-sm input-group-append" type="button" onClick={handleDelete}>Delete</button>}
    </div>
  );
}

export default Message;
