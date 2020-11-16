import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Homepage from './components/Home/Homepage/Homepage';
import NotFound from './components/NotFound/NotFound';
import HomeDetailPage from './components/HomeDetail/HomeDetailPage/HomeDetailPage';

function App() {
  return (
    
    <Router>
      
      <Switch>
      <Route path = "/home">
        <Homepage></Homepage>
      </Route>
      <Route exact path = "/">
        <HomeDetailPage></HomeDetailPage>
      </Route>
      {/* <Route exact path = "/">
        <Homepage></Homepage>
      </Route> */}
      <Route path = "*">
        <NotFound></NotFound>   
      </Route>
      
    </Switch>
  </Router>
    
  );
}

export default App;
