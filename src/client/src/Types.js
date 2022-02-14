import React, { useEffect } from 'react'
import './Types.css';
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Types() {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
  
    return (
    <>

    <Container>
    
        <Row>
        <Col sm><div className ="column_top">
            <Link to ="/ElectronicsTypes">
                <img data-aos="fade" src= "https://media.wired.com/photos/5dfc14fe0c5fac0008be12bb/1:1/w_803,h_803,c_limit/Gear-Beats-Solo-Pro-gold-SOURCE-Beats.jpg" alt="Electronics"  ></img>         
             </Link> 
        </div></Col>
        <Col sm><div className ="column_top">
            <img data-aos="fade" src= "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F06%2Fnike-9.jpg" alt="Clothes" ></img>
        </div></Col>
        <Col sm><div className ="column_top">
            <img data-aos="fade" src= "https://st.hzcdn.com/simgs/pictures/bedrooms/miami-beach-modern-condo-kay-story-interiors-img~dcc15d8c0ab11ed0_14-9483-1-e35efec.jpg" alt="Furnitures" ></img>
        </div> </Col>
    </Row>
    </Container>

    <Container>
    
        <Row>
        <Col sm><div data-aos="fade" className ="column_low">
            <img src= "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/romance-novels-1611696322.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*" alt="Books"  ></img>
        </div></Col>
        <Col sm><div data-aos="fade" className ="column_low">
            <img src= "https://www.moneycrashers.com/wp-content/uploads/2011/12/paper-bag-filled-with-groceries-produce-bread-milk.jpg" alt="Grocery" ></img>
        </div></Col>
        <Col sm><div data-aos="fade" className ="column_low">
            <img src= "https://images.theconversation.com/files/433882/original/file-20211125-1695-145t7be.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="Toys" ></img>
        </div> </Col>
    </Row>
    </Container>

    

    
    </>
    
    
  )
}


