import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login/Login';

export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
