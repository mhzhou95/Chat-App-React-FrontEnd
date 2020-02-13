import React, { useState, useEffect, useContext } from 'react';
import { createUser } from '../Services/UserService';
import { ErrorContext } from '../State/ErrorState';

const SignUpPage = (props) => {
  const initialState = {
    username: "",
    password: "",
    displayName: ""
  }
  const [user, setuser] = useState(initialState);
  const [ , setError ] = useContext(ErrorContext);

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
        createUser(user)
        .then(props.history.push("/login"))
        .then( setError( { message: "" }))
        // .catch( setError({ message: "username or display name already taken"}) );
    }
  }, [user, props.history, setError]);

  return (
    <div>
      <p></p>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input className="form-control" type="text" required name="username" minLength="6" maxLength="12" placeholder="No spaces" ></input>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:   </label>
          <input className="form-control" type="password" required name="password" minLength="6" maxLength="16" placeholder="No spaces" ></input>
        </div>

        <div className="form-group">
          <label htmlFor="displayName">Display Name: </label>
          <input className="form-control" type="text" required name="displayName" maxLength="16" ></input>
        </div>
        
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default SignUpPage;
