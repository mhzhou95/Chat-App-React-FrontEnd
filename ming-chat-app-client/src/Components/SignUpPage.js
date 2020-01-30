import React, { useState, useEffect } from 'react';
import { CreateUser } from '../Services/UserService';

const SignUpPage = () => {
  const initialState = {
    username: "",
    password: "",
    displayName: ""
  }
  const [user, setuser] = useState(initialState);

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    setuser({
      ...user,
      username: event.target.username.value,
      password: event.target.password.value,
      displayName: event.target.displayName.value
    });
  }

  useEffect(() => {
    if(user.username.length >= 6 && user.password.length >=6 && user.displayName.length > 0){
      CreateUser(user);
    }
  }, [user]);

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label>Username: </label><input type="text" required name="username" minLength="6"></input><br/>
        <label>Password: </label><input type="password" required name="password" minLength="6"></input><br/>
        <label>Display Name: </label><input type="text" required name="displayName"></input><br/>
        <button>Register</button>
      </form>
    </div>
  );
}

export default SignUpPage;
