import React from 'react'
import Navbbar from "./Navbbar.css";
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <div>
           <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> Movie App</Link>
      </h1>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li>
          |
          <Link to="/Login" title="Dashboard"
            ><i className="fas fa-user"></i>
            <span className="hide-sm">Sing In</span></Link>
        </li>
        <li>
          <Link to="/Enregistrement" title="Register">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Sing Out </span></Link>
        </li>
      </ul>
    </nav>
        </div>
    )
}

export default NavBar
