import React, { useEffect } from 'react';
import './Types.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function Types() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Images that can link to the categories of products */}
      {/* First row */}
      <Container>
        <Row>
          <Col sm>
            <div className="column_top">
              <a href='#Electronics'>
                <img
                  data-aos="fade"
                  src="https://media.wired.com/photos/5dfc14fe0c5fac0008be12bb/1:1/w_803,h_803,c_limit/Gear-Beats-Solo-Pro-gold-SOURCE-Beats.jpg"
                  alt="Electronics">
                </img>
              </a>
              
            </div>
          </Col>
          <Col sm>
            <div className="column_top">
              <a href='#Clothes' >
                <img
                  data-aos="fade"
                  src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F06%2Fnike-9.jpg"
                  alt="Clothes">
                </img>
              </a>
              
            </div>
          </Col>
          <Col sm>
            <div className="column_top">
              <a href='#Furniture'>   
                <img
                  data-aos="fade"
                  src="https://st.hzcdn.com/simgs/pictures/bedrooms/miami-beach-modern-condo-kay-story-interiors-img~dcc15d8c0ab11ed0_14-9483-1-e35efec.jpg"
                  alt="Furnitures">
                </img>
              </a>     
              
            </div>{' '}
          </Col>
        </Row>
      </Container>

      {/* Second row */}
      <Container>
        <Row>
          <Col sm>
            <div data-aos="fade" className="column_low">
              <a href='#Books'>
                <img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/romance-novels-1611696322.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
                  alt="Books">
                </img>
              </a>
            </div>
          </Col>
          <Col sm>
            <div data-aos="fade" className="column_low">
              <a href='#Groceries'>
                <img
                  src="https://www.moneycrashers.com/wp-content/uploads/2011/12/paper-bag-filled-with-groceries-produce-bread-milk.jpg"
                  alt="Grocery">
                </img>
              </a>
            </div>
          </Col>
          <Col sm>
            <div data-aos="fade" className="column_low">
              <a href='#Toys'>
                <img
                  src="https://images.theconversation.com/files/433882/original/file-20211125-1695-145t7be.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                  alt="Toys">
                </img>
              </a>
            </div>{' '}
          </Col>
        </Row>
      </Container>
    </>
  );
}
