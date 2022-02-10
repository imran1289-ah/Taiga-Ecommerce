import React from 'react'
import './Types.css';
import {Container} from 'react-bootstrap';
import {Row }from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Types() {
  return (
    <>

    <Container>
    
        <Row>
        <Col sm><div className ="column_top">
            <img src= "https://media.cnn.com/api/v1/images/stellar/prod/210922153639-best-smartphones-lead.jpg?q=x_0,y_54,h_2082,w_3701,c_crop/w_800" alt="Electronics"  ></img>
        </div></Col>
        <Col sm><div className ="column_top">
            <img src= "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F06%2Fnike-9.jpg" alt="Clothes" ></img>
        </div></Col>
        <Col sm><div className ="column_top">
            <img src= "https://st.hzcdn.com/simgs/pictures/bedrooms/miami-beach-modern-condo-kay-story-interiors-img~dcc15d8c0ab11ed0_14-9483-1-e35efec.jpg" alt="Furnitures" ></img>
        </div> </Col>
    </Row>
    </Container>

    <Container>
    
        <Row>
        <Col sm><div className ="column_low">
            <img src= "https://media.wired.com/photos/5be4cd03db23f3775e466767/master/pass/books-521812297.jpg" alt="Books"  ></img>
        </div></Col>
        <Col sm><div className ="column_low">
            <img src= "https://media.cntraveler.com/photos/5e73088a1185400008f5b39c/master/pass/TR0420_WOM_MontrealChefs02.jpg" alt="Food" ></img>
        </div></Col>
        <Col sm><div className ="column_low">
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgGNDsYPPosaKaU3twizgd0Q3fdumNACi5g&usqp=CAU" alt="Toys" ></img>
        </div> </Col>
    </Row>
    </Container>

    

    
    </>
    
    
  )
}


