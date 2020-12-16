import React from 'react';
import { Modal , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class AddModal extends React.Component{
    constructor(props){
        super(props);
        this.state={show:false};
    }


handelShow=()=>{
    this.setState({ show: !this.state.show});
};
handelchange=(event)=>{
    this.setState({
        [event.target.name] : event.target.value,
    })
}
 handelAdd=()=>{
     console.log(this.state);
     this.props.addMovie(this.state);
     this.handelShow();
 }
    render()
    {
        return (
            
            <section>
                <Button variant="primary" onClick={this.handelShow}>
        Launch demo modal
      </Button>

      <Modal show={this.state.show} onHide={this.handelShow}>
       <Modal.Header closeButton>
    <Modal.Title>Add your New Movie</Modal.Title>
  </Modal.Header>
       <Modal.Body>
    <label className="input" >Title:</label>
    <input type="text" name="name" onChange={this.handelchange} /> <br/>
    <label className="input" >Image:</label>
    <input type="text" name="image" onChange={this.handelchange} /><br/>
    <label className="input" >Year:</label>
    <input type="text" name="year" onChange={this.handelchange}/><br/>
    <label className="input" >Rating:</label>
    <input type="text" name="rating" onChange={this.handelchange} /><br/>
  </Modal.Body>
       <Modal.Footer>
    <Button variant="secondary" onClick={this.handelShow} >Close</Button>
    <Button variant="primary" onClick={this.handelAdd.bind(this)} >Save and Add</Button>
  </Modal.Footer>
      </Modal>
      </section>)}
}
export default AddModal;
          


// {/* <Modal.Dialog show={this.state.show} onHide={this.handelShow}>
//   <Modal.Header closeButton>
//     <Modal.Title>Add your New Movie</Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
//     <label className="input" >Title:</label>
//     <input type="text" name="name" onChange={this.handelchange} />
//     <label className="input" >Image:</label>
//     <input type="text" name="image" onChange={this.handelchange} />
//     <label className="input" >Year:</label>
//     <input type="text" name="year" onChange={this.handelchange}/>
//     <label className="input" >Rating:</label>
//     <input type="text" name="rating" onChange={this.handelchange} />
//   </Modal.Body>

//   <Modal.Footer>
//     <Button variant="secondary" onClick={this.handelShow} >Close</Button>
//     <Button variant="primary">Save and Add</Button>
//   </Modal.Footer>
// </Modal.Dialog> */}
  