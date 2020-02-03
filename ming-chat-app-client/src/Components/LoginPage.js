import React, { useState, useEffect, useContext } from 'react';
import { loginUser } from '../Services/UserService';

const LoginPage = (props) => {
  const initialState = {
    username: "",
    password: ""
  }

  const [userToLogin, setuserToLogin] = useState(initialState);

  const handleLogin = (event) => {
    event.preventDefault();
    setuserToLogin({
      ...userToLogin,
      username: event.target.username.value,
      password: event.target.password.value
    })
  }

  useEffect(() => {
    if(userToLogin.username.length >= 6 && userToLogin.password.length >= 6)
    { 
      loginUser(userToLogin).then( data => console.log(data)).then(props.history.push("/"))
    }
  }, [userToLogin, props.history]);
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>Username: <input type="text" required minLength="6" maxLength="12" name="username"></input></label><br/>
        <label>Password: <input type="pasword" required minLength="6" maxLength="16" name="password"></input></label><br/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
