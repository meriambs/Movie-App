import React ,{useState} from 'react';
import SearchMovie from './SearchMovie';
function Search ( {setMovieList , allMovies}){

const [state , setState]=useState({
    searchword:"",
   
});


const changeruserInput=(e)=>{
 let searchword=e.target.value;

setState(prevState =>{
    return {...prevState , searchword:searchword}
});
 
 setMovieList(allMovies.filter(el => el.name.includes(state.searchword)))
}

    return (<section>
        <SearchMovie changeruserInput={changeruserInput}/>
    </section>)
}
export default Search;
