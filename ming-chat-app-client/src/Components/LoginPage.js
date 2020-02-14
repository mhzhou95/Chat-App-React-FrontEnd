import React, { useState, useEffect, useContext } from 'react';
import { loginUser } from '../Services/UserService';
import { UserContext } from '../State/UserState';
import { ErrorContext } from '../State/ErrorState';

const LoginPage = (props) => {
  const initialState = {
    id: "",
    username: "",
    password: "",
    authenticated: false
  }

  const [userToLogin, setuserToLogin] = useState(initialState);
  const [user, setUser] = useContext(UserContext);
  const [ error, setError] = useContext(ErrorContext);

  const handleLogin = (event) => {
    event.preventDefault();
    setuserToLogin({
      ...userToLogin,
      username: event.target.username.value,
      password: event.target.password.value,
      authenticated:true
    })
  }

  useEffect(() => {
    const abortController = new AbortController();
    if(userToLogin.username.length >= 6 && userToLogin.password.length >= 6)
    { 
      loginUser(userToLogin)
      .then( data => setUser(data))
      .then( props.history.push("/1"))
      .catch( () => setError({message: "Login failed, invalid username or password", status: "danger" })
      )
    }
    return function cleanup(){
      abortController.abort()
    }
  }, [userToLogin, props.history, setUser, user, setError]);
  return (
    <div>
       { (error.status === "danger") && <p className="alert alert-danger">{error.message}</p>}
       { (error.status === "success") && <p className="alert alert-success">{error.message}</p>} 
      <form onSubmit={handleLogin}>
        <div className="form-group">
        <label htmlFor="username"> Username: </label>
        <input className="form-control" type="text" required minLength="6" maxLength="12" name="username"></input>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input className="form-control" type="password" required minLength="6" maxLength="16" name="password"></input>
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
