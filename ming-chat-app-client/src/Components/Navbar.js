import React, { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext }  from '../State/UserState';

const Navbar = () => {
  const [ , setUser] = useContext(UserContext);
  const handleLogout = () =>{
    setUser({
      displayName: null,
      id: null,
      authenticated: false
    })
  }
  return (
    <nav>
      <ul>
        <li><NavLink to = "/1" > Home </NavLink></li>
        <li><NavLink to = "/register" > Register </NavLink></li>
        <li><NavLink to= "/login" > Login </NavLink></li>
        <li><NavLink to="/1" onClick={handleLogout}>Logout</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
