import React from 'react';
import { Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const MovieList= (props)=>{
    
return (
    <section className="MovieList">
     {props.movies.map(el=> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
     {el.year}
    </Card.Text>
    <StarRatingComponent value={el.rating} renderStarIcon={() => <span>*</span>}/>
    
  </Card.Body>
</Card>)}

    </section>
)
}

export default MovieList;