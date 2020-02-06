import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import { UserProvider } from './State/UserState';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
      <Navbar/>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={SignUpPage}/>
            <Route exact path = "/:id" component={Home} />  
            <Redirect from= "/" to="/1" /> 
          </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
