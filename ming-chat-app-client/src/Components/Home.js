import React, { useContext, useEffect } from 'react';
import ChatRoomList from './ChatRoomList';
import { UserContext }  from '../State/UserState';
import { ErrorContext } from '../State/ErrorState';

const Home = (props) => {
  const [user] = useContext(UserContext);
  const [ error, setError] = useContext(ErrorContext);
  
  useEffect(()=>{
    user.authenticated && setError({message: ""})
  }, [setError, user])
  return (
    <div>
      <div className="header">
      { error.message.length > 0 ? <p>{error.message}</p>: <p></p>}
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
