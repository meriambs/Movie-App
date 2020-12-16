import React  from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';
import MovieList from "./component/MovieList";
import AddModal from "./component/AddModal";
import Rating from './component/Rating';
import SearchMovie from './component/SearchMovie'
class App extends React.Component{
  state={
    movies:[
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
    ],
    // searchTerm:"",
    rating:1,
  };
  
    Add =(newMovie)=>{
      this.setState({
        movies:this.state.movies.concat(newMovie),
      })
    }
    // getSearch=(ValueSearch)=>{
    //   this.setState({
    //     searchTerm:ValueSearch,
    //   })
    // }
    getRating=(ValueRating)=>{
      this.setState({
        rating:ValueRating,
      })
    }
  render()
  {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To Our Movie App</h1>
        <div className="Search">
          <SearchMovie/>
        </div>
        {/* <Search search={(s)=>this.getSearch(s)}/> */}
        <Rating rating={(R)=>this.getRating(R)} />
       <div className="cardpart">
         <MovieList movies={this.state.movies}/>
         <AddModal addMovie={(newMovie)=>this.Add(newMovie)} />
       </div>
      </header>
    </div>
  );}
}

export default App;
