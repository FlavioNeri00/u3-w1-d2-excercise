import { Component } from "react";
import { Card,  Col, Container, Row} from "react-bootstrap";
import fantasy from "./books/fantasy.json"
import "../App.css"
class AllTheBooks extends Component {
    render(){
        return(
            <div>
                <Container>
            <h1 className="text-center mb-5 mt-5">Our fantasy books!</h1>
            <Row className="gx-2 gy-3">
                {fantasy.map((title, index) =>(
                <Col sm={2} key={`title-${index}`}>
            <Card style={{height:"30rem"}}>
             <Card.Img variant="top" src={title.img}  style={{width:"207.5px", height:"300px", objectFit:"contain"}} />
             <Card.Body className="truncate">
               <Card.Title className="mb-5" >{title.title}</Card.Title>
               <p>{title.price}€</p>
                </Card.Body>
             </Card>
             </Col>
             ))}
          
          
          </Row>
          </Container>
          </div>
        )
    }
}
export default AllTheBooks