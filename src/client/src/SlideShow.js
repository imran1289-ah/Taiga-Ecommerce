import React from 'react';
import { Carousel } from 'react-bootstrap';
import './SlideShow.css';
import { Link } from 'react-router-dom';

export default function SlideShow() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Link to="/FilterProducts">
        <img
          className="d-block w-100"
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/find-font-from-image.png"
          alt="Find"
        />
        </Link>
      

      <Carousel.Caption>
        <div className="text">
          <h3>Find your product</h3>
          <p>Use Taiga filter's to find the product you want !</p>
        </div>
      </Carousel.Caption>
      </Carousel.Item>
      
      
      
      <Carousel.Item>
        <a href='#Electronics'>
          <img
            className="d-block w-100"
            src="https://s.yimg.com/uu/api/res/1.2/iIiAuB4i2JjrOpjyouAPhA--~B/aD0xNTUwO3c9MjQwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-04/18c7cb00-9829-11eb-9f9f-11c3d682f8cf.cf.jpg"
            alt="Electronics"
          />
        </a>
        

        <Carousel.Caption>
          <div className="text">
            <h3>Shop electronics</h3>
            <p>All the new gadgets only avalaible at Taiga!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='#Furniture'>
          <img
            className="d-block w-100"
            src="https://cdn.luxe.digital/media/2020/06/12124807/best-online-furniture-stores-luxury-floyd-home-luxe-digital.jpg"
            alt="Furnitures"
          />
        </a>

        <Carousel.Caption>
          <div className="text">
            <h3>Shop Furnitures</h3>
            <p>Get the best and comfiest furnitures in the market</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href='#Clothes'>
          <img
            className="d-block w-100"
            src="https://3z6mv8219w2s2w196j1dkzga-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg"
            alt="Clothes"
          />
        </a>

        <Carousel.Caption>
          <div className="text">
            <h3>Shop Clothes</h3>
            <p>Shop for Clothes</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        < a href='#Books'>
          <img
            className="d-block w-100"
            src="https://wallpaperbat.com/img/317478-the-books-of-college-libraries-are-turning-into-wallpaper.jpg"
            alt="Books"
          />
        </a>
        <Carousel.Caption>
          <div className="text">
            <h3>Shop Books</h3>
            <p>Shop for the newest realease of books here at Taiga!</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <a href='#Groceries'>
          <img
            className="d-block w-100"
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_518504426_2000196920009280941_319976.jpg"
            alt="Grocery"
          />
        </a>
        <Carousel.Caption>
          <div className="text">
            <h3>Shop Grocery</h3>
            <p>Get your grocery here at Taiga</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <a href='#Toys'>
          <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pieces-of-lego-displayed-during-the-exhibition-at-alexandra-news-photo-1586272389.jpg"
            alt="Toys"
          />
        </a>
        <Carousel.Caption>
          <div className="text">
            <h3>Shop Toys</h3>
            <p>Get the best gifts for your kids</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
