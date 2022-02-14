import React from 'react';
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import "./GroceryTypes.css";

export default function GroceryTypes() {
  return (
    <Container>
    
    <Row>
    <Col sm><div className ="grocery_types">
       <img data-aos="fade" src= "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg" alt="Fruits"  ></img>
       <h3>Fruits</h3>
       <p>Get the freshest fruits in the market at Taiga</p>
    </div></Col>
    <Col sm><div className ="grocery_types">
        <img data-aos="fade" src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg" alt="Vegetables" ></img>
        <h3>Vegetables</h3>
        <p>Get the freshest vegetables in the market at Taiga</p>
    </div></Col>
    <Col sm><div className ="grocery_types">
        <img data-aos="fade" src= "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/snacks-in-america.jpg?quality=82&strip=all&w=1200" alt="Snacks" ></img>
        <h3>Snacks</h3>
        <p>Get exclusive deals on kids favourite snacks here at Taiga</p>
    </div> </Col>
</Row>
</Container>
  )
}
