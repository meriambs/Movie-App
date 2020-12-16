import React from 'react';
 import './Stylee.css';


function  SearchMovie ({changeruserInput}){

  
    return (
        <section className="mouvieSearch">
  <input 
   placeholder="What Are You Looking For ..."
   className="searchbox"
    onChange={changeruserInput}/>
    
  <button type="submit" >OK</button>
        </section>
   )
  
}
export default SearchMovie ;
