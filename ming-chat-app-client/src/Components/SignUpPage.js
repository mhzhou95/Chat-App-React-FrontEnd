import React, { useState, useEffect } from 'react';
import { createUser } from '../Services/UserService';

const SignUpPage = () => {
  const initialState = {
    username: "",
    password: "",
    displayName: ""
  }
  const [user, setuser] = useState(initialState);
  
  const handleSignUp = (event) => {
    event.preventDefault();
    setuser({
      ...user,
      username: event.target.username.value.replace(/\s/g, ""),
      password: event.target.password.value.replace(/\s/g, ""),
      displayName: event.target.displayName.value
    });
  }

  useEffect(() => {
    if(user.username.length >= 6 && user.password.length >=6 && user.displayName.length > 0){
      createUser(user);
    }
  }, [user]);

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label>Username: <input type="text" required name="username" minLength="6" maxLength="12" placeholder="No spaces" ></input> </label><br/>
        <label>Password:  <input type="password" required name="password" minLength="6" maxLength="16" placeholder="No spaces" ></input> </label><br/>
        <label>Display Name: <input type="text" required name="displayName" maxLength="16" ></input></label><br/>
        <button>Register</button>
      </form>
    </div>
  );
}

export default SignUpPage;
