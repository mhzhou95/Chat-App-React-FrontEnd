import React, { useContext, useEffect} from 'react';
import ChatRoomList from './ChatRoomList';
import { UserContext }  from '../State/UserState';

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  useEffect( () => {
    setUser({
      ... user,
      username: "context STate username",
    })
  }, []);
  return (
    <div>
      { user.username}
      <ChatRoomList />
    </div>
  );
}

export default Home;
