import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignUpPage from './Components/SignUpPage';
import LoginPage from './Components/LoginPage';
import { UserProvider } from './State/UserState';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar/>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={SignUpPage}/>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
