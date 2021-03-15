import React from 'react'
import './Front.css';
import {Link} from "react-router-dom";
 import 'bootstrap/dist/css/bootstrap.min.css';



const Front = () => {
    return (
        <div>
      <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Let's Have a Good Time </h1>
          {/* <p className="lead">
            Have a good Time 
          </p> */}
          <div className="buttons">
            <Link to ="/Home" className="btn btn-primary">L'ets Start</Link>
            
          </div>
        </div>
      </div>
    </section>
  
        </div>
    )
}

export default Front
