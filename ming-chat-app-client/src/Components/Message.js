import React from 'react';

const Message = (props) => {
  return (
    <div>
     <p>{props.message.text}</p>
    </div>
  );
}

export default Message;
