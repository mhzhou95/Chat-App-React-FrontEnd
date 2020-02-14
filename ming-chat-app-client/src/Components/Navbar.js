import React, { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext }  from '../State/UserState';

const Navbar = () => {
  const [ user , setUser] = useContext(UserContext);
  const handleLogout = () =>{
    setUser({
      displayName: null,
      id: null,
      authenticated: false
    })
  }
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
      <div>
        { user.authenticated ? 
          <ul className="nav navbar-nav">
            <li className="nav-item-active"><NavLink className="nav-link" to= "/1"> Home </NavLink></li>
            <li className="nav-item-active"><NavLink className="nav-link" to="/edit"> Account </NavLink></li>
            <li className="nav-item-active"><NavLink className="nav-link" to="/login" onClick={handleLogout}>Logout</NavLink></li>
          </ul>
            :
          <ul className="nav navbar-nav">
            <li className="nav-item-active"><NavLink className="nav-link" to = "/1" > Home </NavLink></li>
            <li className="nav-item-active"><NavLink className="nav-link" to = "/register" > Register </NavLink></li>
            <li className="nav-item-active"><NavLink className="nav-link" to= "/login" > Login </NavLink></li>
          </ul>
          }
      </div>
    </nav>
  );
}
export default Navbar;
