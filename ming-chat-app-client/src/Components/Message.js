import React from 'react';
import { deleteMessage} from '../Services/ChatRoomService';
import * as moment from 'moment';

const Message = (props) => {
  const handleDelete = () => {
    deleteMessage(props.message.chatRoomId, props.message.id)
  }

  return (
    <div className="input-group mb-3 input-group-sm">
      <div className="input-group-prepend">
        <span className="input-group-text">{props.message.userDisplayName}</span>
      </div>
        <p className="form-control">{props.message.text}</p> 
      <div className="input-group-append">
        <span className="input-group-text">{moment(props.message.time).format("MMM D h:mm a")}</span>
        {props.user.id === props.message.userId && <button className="btn btn-danger btn-sm input-group" type="button" onClick={handleDelete}>X</button>}
      </div>
    </div>
  );
}

export default Message;
