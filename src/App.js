import React from 'react';
import './App.css';
import Home from './Home';
import Description from "./component/MovieData/Description";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

const App=()=>{
 
  
    return (
    <div className="App" >
     <Router>
       <Switch>
          <Route exact path="/home">
            <Home/>
          </Route>
       <Route path="/description/movie/:id">
            <Description />
          </Route>
          </Switch> 
             </Router> 
    </div>
  );
}

export default App;
