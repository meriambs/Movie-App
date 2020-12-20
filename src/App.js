import React , {useState} from 'react';
import './App.css';

import { v4 as uuidv4 } from 'uuid';
import MovieList from "./component/MovieList";
import AddModal from "./component/AddModal";
import Rating from './component/Rating';
import Search from './component/Search'

const movies=[
        { id:uuidv4 (),
          name:"Howl’s Moving Castle (ハウルの動く城)",
          image:"./Image/howlsmovie.jpg",
          rating:4,
          year:"2004",
          description:"When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged",
        },
           { id:uuidv4 (),
          name:"Tamako Market (たまこラブストーリー)",
          image:"./Image/Tamako Market .jpg",
          rating:5,
          year:"2013",
          description:"en rentrant chez le fleuriste, elle remarque une étrange chose dans un bouquet, quand soudain, ce qui s'avère être un oiseau, se jette brusquement sur elle ! Mais ce n'est pas n'importe quel oiseau, c'est un oiseau qui parle le langage humain et qui, semble t-il soit investie d'une mission."

        },
         { id:uuidv4 (),
          name:"A Silent Voice (聲の形)",
          image:"./Image/silentvoice.jpeg",
          rating:4,
          year:"2013",
          description:"Nishimiya est une élève douce et attentionnée. Chaque jour, pourtant, elle est harcelée par Ishida, car elle est malentendante. Dénoncé pour son comportement, le garçon est à son tour mis à l'écart et se retrouve seul. 5 ans plus tard, il apprend la langue des signes et part à la recherche de la jeune fille."

        },
         { id:uuidv4 (),
          name:"JoJo no kimyô-na bôken ",
          image:"./Image/jojo.jpg",
          rating:3,
          year:"2016",
          description:"Cette saga au ton particulièrement décomplexé suit les aventures de la famille Joestar sur plusieurs générations, chaque génération ayant son « JoJo ». Les intrigues des différentes parties sont très variées, explorant plusieurs registres différents. Plus ou moins sérieuses, elles peuvent aller du récit d'aventures musclé à l'humour absurde"

        },
       { id:uuidv4 (),
          name:"Wolf Children (おおかみこどもの雨と雪)",
          image:"./Image/Wolf_Children.jpg",
          rating:3,
          year:"2012",
          description:"Après la mort inattendue de son amant loup-garou dans un accident alors qu'il cherchait de la nourriture pour leurs enfants, une jeune femme doit trouver des moyens d'élever le fils et la fille loup-garou qu'elle avait avec lui tout en gardant leur trait caché de la société.",

        },
        { id:uuidv4 (),
          name:"Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train (鬼滅の刃 無限列車編)",
          image:"./Image/demonslayer.webp",
          rating:4,
          year:"2019",
          description:"Depuis la mort de son père, Tanjirô a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien.",

        },
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
