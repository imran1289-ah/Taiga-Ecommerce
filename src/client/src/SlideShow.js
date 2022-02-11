import React from 'react'
import { Carousel } from 'react-bootstrap';
import "./SlideShow.css";

export default function SlideShow() {
  return (
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MDVhNzI5MWMt/MDVhNzI5MWMt-NTk3YzNjM2Ut-w640.jpeg"
      alt="Electronics"
    />
    <Carousel.Caption>
      <div className="text">
      <h3>Shop electronics</h3>
      <p>All the new gadgets only avalaible at Taiga!</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.luxe.digital/media/2020/06/12124807/best-online-furniture-stores-luxury-floyd-home-luxe-digital.jpg"
      alt="Furnitures"
    />

    <Carousel.Caption>
    <div className="text">
      <h3>Shop Furnitures</h3>
      <p>Get the best and comfiest furnitures in the market</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://3z6mv8219w2s2w196j1dkzga-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg"
      alt="Clothes"
    />

    <Carousel.Caption>
    <div className="text">
      <h3>Shop Clothes</h3>
      <p>Get the best quality clothes here at Taiga</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}
