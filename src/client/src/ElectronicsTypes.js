import React from 'react'
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import "./ElectronicsTypes.css";

export default function ElectronicsTypes() {
  return (
    <Container>
    
        <Row>
        <Col sm><div className ="electronics_types">
           <img data-aos="fade" src= "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/comparatif_consoles_next_gen.jpg" alt="Games"  ></img>
           <h3>Consoles and Video Games</h3>
           <p>Get the newest consoles and video games exclusively here at Taiga</p>
        </div></Col>
        <Col sm><div className ="electronics_types">
            <img data-aos="fade" src="https://www.notebookcheck.net/fileadmin/Notebooks/Sonstiges/Besten_Foto-Smartphone_Ende_2021/4_to_3_Teaser_Camera_Compare_Flagship_Smartphones_2021.jpg" alt="Smartphones" ></img>
            <h3>Smartphones/Tablets and accessories</h3>
            <p>Shop for exclusive offers on the newest smartphones and tablets in the market</p>
        </div></Col>
        <Col sm><div className ="electronics_types">
            <img data-aos="fade" src= "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-66595-PcGamingBuyingGuide-GamingDesktops-img-175607.jpg" alt="Computer" ></img>
            <h3>Computers and Laptops</h3>
            <p>Buy your new computer here at Taiga</p>
        </div> </Col>
    </Row>
    </Container>
  )
}
