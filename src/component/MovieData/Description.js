import React from 'react';
import {useParams} from "react-router-dom";
import {movies} from '../../Constants';
import './Description.css';
import StarRatingComponent from 'react-star-rating-component';
function Description(){
    const {id}=useParams();
    const movie=movies.find(el => el.id===id);
    return (
    <div className="descriptionmovie"> 
   
  <div className="textpart" >
        <div className="titlepart"><h1>{movie.name}</h1><h2>{movie.year}</h2></div>
       <div className="rattingpart"><StarRatingComponent>{movie.rating}</StarRatingComponent></div>
      
      <div className="descriptionpart">{movie.description}</div>
</div>
<div className="phototpart"> <img src={movie.image}/> </div>


      <div className="videopart"> <iframe width="640" height="360" src={movie.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
        
    </div>)
}
export default Description;

