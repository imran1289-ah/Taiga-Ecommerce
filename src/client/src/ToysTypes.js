import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './ToyTypes.css';
import { Link } from 'react-router-dom';

export default function ToysTypes() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="toy_types">
            <Link to="/MainBoyToysContent">
              <img
                data-aos="fade"
                src="https://cdn.vox-cdn.com/thumbor/MfTvTl0sRafCiB62x54Gofne4fQ=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22326170/nerf_hyper_mach_3_2.jpg"
                alt="Boys"
              ></img>
            </Link>
            <h3>Boys Toys</h3>
            <p>Shop toys for boys</p>
          </div>
        </Col>
        <Col>
          <div className="toy_types">
            <Link to="/MainGirlToysContent">
              <img
                data-aos="fade"
                src="https://www.you-buy.ca/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFJWVAycGJKMlMuX0FDX1NMMTUwMF8uanBn.jpg"
                alt="Girls"
              ></img>
            </Link>
            <h3>Girl Toys</h3>
            <p>Shop toys for girls</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
