import React from 'react';
import { deleteMessage} from '../Services/ChatRoomService';

const Message = (props) => {
  const handleDelete = () => {
    deleteMessage(props.message.chatRoomId, props.message.id)
  }

  return (
    <div>
    <p> 
      {props.message.userDisplayName}: {props.message.text} 
      {props.user.id === props.message.userId && <button onClick={handleDelete}>Delete</button>}
    </p>
    </div>
  );
}

export default Message;
