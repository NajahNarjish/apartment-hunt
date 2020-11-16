import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import Homepage from './components/Home/Homepage/Homepage';
import Navbar from './components/Shared/Navbar/Navbar';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Homepage></Homepage>
            </Route>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            {/* <Route path = "*">
        <NotFound></NotFound>   
      </Route> */}

          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
