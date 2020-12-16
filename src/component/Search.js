import React ,{useState} from 'react';
import SearchMovie from './SearchMovie';
function Search (){

const [state , setState]=useState({
    s:"",
    result:[],
    selected:{},
});


const changeruserInput=(e)=>{
 let s=e.target.value;

setState(prevState =>{
    return {...prevState , s:s}
});
 console.log(state.s)
}

    return (<section>
        <SearchMovie changeruserInput={changeruserInput}/>
    </section>)
}
export default Search;
