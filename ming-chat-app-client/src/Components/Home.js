import React, { useContext, useEffect } from 'react';
import ChatRoomList from './ChatRoomList';
import { UserContext }  from '../State/UserState';
import { ErrorContext } from '../State/ErrorState';

const Home = (props) => {
  const [user, setUser] = useContext(UserContext);
  const [ error, setError] = useContext(ErrorContext);
  useEffect( ()=>{
    const abortController = new AbortController();
    user.authenticated && setError({message: "", status: ""})
    return function cleanup(){
      abortController.abort()
    }
  }, [setError, user])
  useEffect( ()=> { 
    const abortController = new AbortController();
    user.authenticated && setUser({ ...user, password: ""})
    return function cleanup(){
      abortController.abort()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setUser]) 
  return (
    <div>
      <div className="header">
      { (error.status === "danger") && <p className="alert alert-danger">{error.message}</p>}
      { (error.status === "success") && <p className="alert alert-success">{error.message}</p>}
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
