import React , {component}from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Rating extends React.Component{
    state = {
      rating: 1
    }; 

     onStarClick = (nextValue, prevValue, name)=> {
    this.setState({rating: nextValue});
  }
    render(){
        return (
            <div className="ratingpart">
 <StarRatingComponent value={this.state.rating}
  renderStarIcon={() => <span>*</span>}
   onStarClick={this.onStarClick} />
    
            </div>
        )
    }
}
export default Rating;