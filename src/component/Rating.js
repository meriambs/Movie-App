import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


class Rating extends React.Component{
    state = {
      rating: 1
    }; 

     onStarClick = (nextValue, prevValue, name)=> {
    this.setState({rating: nextValue});
    this.props.rating(nextValue);
     const{setMovieList,movieList}=this.props;
     const nexMovieList=movieList.filter(el=>el.rating === nextValue);
     setMovieList(nexMovieList);
  }

    render(){
        return (
            <div className="ratingpart">
 <StarRatingComponent value={this.state.rating}
  
   onStarClick={this.onStarClick} />
    
            </div>
        )
    }
}
export default Rating;