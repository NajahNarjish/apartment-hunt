import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import Homepage from './components/Home/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';
import HomeDetailPage from './components/HomeDetail/HomeDetailPage/HomeDetailPage';
import Navbar from './components/Shared/Navbar/Navbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/DashboardR/Dashboard/Dashboard'

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
            <PrivateRoute exact path = "/homedetail">
              <HomeDetailPage></HomeDetailPage>
            </PrivateRoute>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path = "*">
              <NotFound></NotFound>   
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
