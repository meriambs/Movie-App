import React from 'react';
import { Card} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const MovieList= (props)=>{
    
return (
    <section className="MovieList" >
      <div className="contenaire" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}} >
     {props.movies.map(el=> <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body style={{color:"black"}}>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
     {el.year}
    </Card.Text>
     <Card.Text>
     {el.description}
    </Card.Text>
    <StarRatingComponent value={el.rating}/>
    
  </Card.Body>
</Card>)}
</div>
    </section>
)
}

export default MovieList;