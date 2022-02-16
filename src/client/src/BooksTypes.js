import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './BooksTypes.css';
import { Link } from 'react-router-dom';

export default function BooksTypes() {
  return (
    <Container>
      <Row>
        <Col sm>
          <div className="books_types">
            <Link to="/MainNovelsContent">
              <img
                data-aos="fade"
                src="https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ceefb6a9d3fd5b8e1dad90e40bcba8ad"
                alt="Novels"
              ></img>
            </Link>
            <h3>Novels</h3>
            <p>Get exlusvive deals on newest releases here at Taiga</p>
          </div>
        </Col>
        <Col sm>
          <div className="books_types">
            <Link to="/MainTextbooksContent">
              <img
                data-aos="fade"
                src="https://scholarlykitchen.sspnet.org/wp-content/uploads/2015/03/texts.jpg"
                alt="TextBooks"
              ></img>
            </Link>
            <h3>Textbooks</h3>
            <p>
              Get the cheapest deal in the market for college and school
              textbooks
            </p>
          </div>
        </Col>
        <Col sm>
          <div className="books_types">
            <Link to="/MainComicsContent">
              <img
                data-aos="fade"
                src="https://jw-webmagazine.com/wp-content/uploads/2020/05/Best-Manga-of-All-Time.jpg"
                alt="ComicManaga"
              ></img>
            </Link>
            <h3>Comic Books and Manga</h3>
            <p>Shops for Comic books and Manga</p>
          </div>{' '}
        </Col>
      </Row>
    </Container>
  );
}
