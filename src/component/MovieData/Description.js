import React from 'react';
import {useParams} from "react-router-dom";
import {movies} from '../../Constants';
import './Description.css';

function Description(){
    const {id}=useParams();
    const movie=movies.find(el => el.id===id);
    return (
    <div className="descriptionmovie" style={{backgroundColor:"#d4dee6"}}> 

   

   <section className="firstpack" style={{padding:"8px"}} >

  <div className="textpart"  style={{display:"flex", flexWrap:"wrap",justifyContent:"flex-end", marginTop:"10%"}}>
        <div className="titlepart" style={{textAlign:"center",textTransform:"uppercase",color:"#8f8fa7"}}><h1>{movie.name}</h1><h2>{movie.year}</h2></div>
       
      <div className="descriptionpart" style={{marginRight:"10%",marginLeft:"47%",marginTop:"10px",textIndent:"50px",textAlign:"center",letterSpacing:"3px"}}>{movie.description}</div>
</div>
<div className="phototpart" style={{ marginLeft:"43px", marginTop:"-16%"}}> <img src={movie.image}/> </div>
</section>

      <div className="videopart" style={{display:"flex", justifyContent:"center", marginTop:"10%"}}><iframe width="740" height="460" src={movie.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
        
    </div>)
}
export default Description;

