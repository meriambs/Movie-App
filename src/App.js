import React from 'react';
import './App.css';
import Home from './Home';
import Front from './Front/Front';
import NavBar from './NavBar/NavBar';
import Enregistrement from "./auth/Enregistrement";
import Login from "./auth/Login";
import Description from "./component/MovieData/Description";
import About from "./About/About";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link} from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const App=()=>{
 
  
    return (
    <div className="App" >
     {/* ne jamais oublier si tu vexu creer un router tu dois mettre a l'interieur ce que tu veux  */}
           <Router>
           <NavBar/>
      {/* ici nous avpon l route principale */}
              <Route exact path="/" component={Front}></Route>
              <switch>
                 <Route path="/description/movie/:id" component={Description} />
              </switch>
  <section  className="container">
            <Switch> 
            {/* ici nous avpon sles routes apres click sur les boutoons ou navbar */}
              <Route exact path="/home" component={Home}/>
              <Route exact path="/About" component={About}/>
              {/* <Route path="/description/movie/:id" component={Description} /> */}
              <Route path="/Login" component={Login} />
              <Route path="/Enregistrement" component={Enregistrement} />
            </Switch>  
 </section>
             </Router> 
    </div>
  );
}

export default App;
