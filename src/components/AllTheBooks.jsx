import { Component } from "react";
import { Card, Button, Col, Container, Row} from "react-bootstrap";
import fantasy from "./books/fantasy.json"
import "../App.css"
class AllTheBooks extends Component {
    render(){
        return(
            <div>
                <Container>
            <h1 className="text-center mb-5 mt-5">Our fantasy books!</h1>
            <Row className="gx-2">
                {fantasy.map((title, index) =>(
                <Col sm={2}>
            <Card >
             <Card.Img variant="top" src={title.img} key={`title-${index}`}/>
             <Card.Body>
               <Card.Title>{title.title}</Card.Title>
               
               <Button variant="primary">Go somewhere</Button>
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