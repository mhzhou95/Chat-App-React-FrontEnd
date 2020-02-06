import React, { useContext } from 'react';
import ChatRoomList from './ChatRoomList';
import { UserContext }  from '../State/UserState';

const Home = (props) => {
  const [user] = useContext(UserContext);
  return (
    <div>
      <div className="header">
        { user.authenticated ?  
            <h4> Hi, { user.displayName } </h4>
          : <h4>Not Logged In</h4>
        }
      </div>   
     <ChatRoomList user = { user } chatRoomId={props.match.params.id}/>
    </div>
  );
}

export default Home;
