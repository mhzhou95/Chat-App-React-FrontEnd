import React, { useContext } from 'react';
import ChatRoomList from './ChatRoomList';
import { UserContext }  from '../State/UserState';

const Home = () => {
  const [user] = useContext(UserContext);
  console.log(user);
  return (
    <div>
      { user.authenticated ?  <div> 
                  <p> Hi, { user.displayName } </p> 
                </div> 
                : <div>Not Logged In</div>}
      <ChatRoomList user ={ user } />
    </div>
  );
}

export default Home;
