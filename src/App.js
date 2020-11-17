import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import Homepage from './components/Home/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';
import HomeDetailPage from './components/HomeDetail/HomeDetailPage/HomeDetailPage';
import Navbar from './components/Shared/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import BookingList from './components/Dashboard/BookingList/BookingList';
import AddRentHouse from './components/Dashboard/AddRentHouse/AddRentHouse';
import MyRent from './components/Dashboard/MyRent/MyRent';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
         
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Homepage></Homepage>
            </Route>
            {/* <Route exact path = "/homedetail">
              <HomeDetailPage></HomeDetailPage>
            </Route> */}
            <Route  path = "/dashboard">
              <Dashboard/>
            </Route>
            <Route  path = "/addHouse">
              <AddRentHouse/>
            </Route>
            <Route  path = "/myRent">
              <MyRent/>
            </Route>
            <Route path = "/homedetail/:eventKey">
              <HomeDetailPage></HomeDetailPage>
            </Route>
            <Route exact path="/">
              <Homepage></Homepage>
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
