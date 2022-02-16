import React from 'react';
import {
  video_games,
  phones,
  computers,
  men_clothes,
  women_clothes,
  kids_clothes,
  living_furniture,
  bedroom_furniture,
  novels,
  textbooks,
  comics,
  fruits,
  vegetables,
  snacks,
  boy_toys,
  girl_toys,
} from './product_data';

const MainContent = () => {
  console.log(comics);
  const listItems = comics.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));
  return (
    <div className="main_content">
      <h3>Comic Books and Manga</h3>
      {listItems}
    </div>
  );
};
export default MainContent;
