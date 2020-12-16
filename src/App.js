import React , {useState} from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';
import MovieList from "./component/MovieList";
import AddModal from "./component/AddModal";
import Rating from './component/Rating';
import Search from './component/Search'

const movies=[
        { id:uuidv4 (),
          name:"inception",
          image:"./Image/scdmovie.jpg",
          rating:4,
          year:"2005",

        },
        { id:uuidv4 (),
          name:"natalie",
          image:"./Image/thirdmovie.jpeg",
          rating:5,
          year:"2010",

        },
         { id:uuidv4 (),
          name:"Action",
          image:"./Image/firstmovie.jpeg",
          rating:3,
          year:"2016",

        }
    ];
   

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
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Our Movie App</h1>
        <div className="Search">
          <Search setMovieList={setMovieList} allMovies ={allMovies }  />
        </div>
        <Rating rating={(R)=>getRating(R)} />
       <div className="cardpart">
         <MovieList movies={movieList}/>
         <AddModal addMovie={Add} />
       </div>
      </header>
    </div>
  );
}

export default App;
