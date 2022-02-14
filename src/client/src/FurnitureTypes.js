import React from 'react';
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import "./FurnitureTypes.css";

export default function FurnitureTypes() {
  return (
    <Container>
    
        <Row>
        <Col><div className ="furniture_types">
           <img data-aos="fade" src= "https://www.coasterfurniture.com/wp-content/uploads/gano-living-room-set.png" alt="LivingRoom"  ></img>
           <h3>Living Room Furnitures</h3>
           <p>Shops for Living Room Furnitures</p>
        </div></Col>
        <Col><div className ="furniture_types">
            <img data-aos="fade" src="https://mobilart.ca/wp-content/uploads/2020/08/Juvenile_MAIN.jpg" alt="BedRoom" ></img>
            <h3>Bedroom Sets and Furnitures</h3>
            <p>Decorate your bedroom with the exlusive furniture from top brands here only at Taiga</p>
        </div></Col>
    </Row>
    </Container>
  )
}
