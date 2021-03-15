import React , {useState} from 'react';

import MovieList from "./component/MovieList";
import AddModal from "./component/AddModal";
import Rating from './component/Rating';
import Search from './component/Search';

import {movies} from './Constants';
const App=(props)=>{
  const [rating, setRating]= useState(1);
  const [movieList , setMovieList]= useState(movies);

   const [allMovies , setAllMovies]= useState(movies);
  

   const Add =(newMovie)=>{
     setAllMovies([...allMovies , newMovie]);
     setMovieList([...allMovies , newMovie]);
    }

  const  getRating=(ValueRating)=>{
      setRating(ValueRating)
    }
  
    return (
    <div className="App" >
   
        <h1 style={{display:"flex",justifyContent:"center",marginTop:"55px"}}>Welcome To Our Movie App</h1>
        <div className="Searchpart" style={{display:"flex",justifyContent:"center"}}>
          <Search setMovieList={setMovieList} allMovies ={allMovies }  />
        </div>
        <div className="ratingpart" style={{display:"flex",justifyContent:"center"}}>
        <Rating rating={(R)=>getRating(R)} setMovieList={setMovieList} movieList={allMovies} />
       </div>
       <div className="cardpart">
         <MovieList movies={movieList}/>
       </div>
        <div className="addingpart" style={{display:"flex",justifyContent:"center"}}> <AddModal addMovie={Add} /></div>
     
    
    </div>
  );
}

export default App;
