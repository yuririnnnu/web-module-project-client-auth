import React from 'react';
import './App.css';
import Login from './components/Login'
import FriendList from './components/FriendList'
import AddFriend from './components/AddFriend'
import Logout from './components/Logout'
import PrivateRoute from './components/PrivateRoute'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Client Auth Project</h2>    
          <Link to="/" className="links">HOME</Link>
          <Link to="/login" className="links">LOGIN</Link>
          <Link to="/friends" className="links">FRIENDS</Link>
          <Link to="/friends/add" className="links">ADD FRIENDS</Link>
          <Link to="/logout" className="links">LOGOUT</Link>
        </header>
        <Route path='/' exact component={Login}/>
        <Route path='/login' exact component={Login}/>
        <PrivateRoute path='/friends' exact component={FriendList}/>
        <PrivateRoute path='/friends/add' exact component={AddFriend}/>
        <PrivateRoute path='/logout' exact component={Logout}/>
      </div>

    </Router>
  );
}

export default App;
