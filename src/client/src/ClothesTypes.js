import React from 'react';
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import "./ClothesTypes.css";

export default function ClothesTypes() {
  return (
    <Container>
    
        <Row>
        <Col sm><div className ="clothes_types">
           <img data-aos="fade" src= "https://media.gq.com/photos/613b6b320e4cb4bc086d58bf/master/pass/affordable.jpg" alt="MenClothes"  ></img>
           <h3>Men Clothes</h3>
           <p>Shop for quality and top branded clothes here at Taiga</p>
        </div></Col>
        <Col sm><div className ="clothes_types">
            <img data-aos="fade" src="https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=20&m=916092484&s=612x612&w=0&h=2aTLAucj_-qbbfhBiJEXfdiY3-k0gx0el8OrKFpi3O8=" alt="WomenClothes" ></img>
            <h3>Women Clothes</h3>
            <p>Shop for women clothes and get exclusive deals on new comings</p>
        </div></Col>
        <Col sm><div className ="clothes_types">
            <img data-aos="fade" src= "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGNsb3RoZXN8ZW58MHx8MHx8&w=1000&q=80" alt="KidsClothes" ></img>
            <h3>Kids Clothes</h3>
            <p>Get the best clothes for your kids</p>
        </div> </Col>
    </Row>
    </Container>
  )
}
