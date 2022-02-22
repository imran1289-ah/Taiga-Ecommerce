import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Productlist.css';
import { Dropdown } from 'react-bootstrap';

class Grocerylist extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get('http://localhost:9000/products/search').then((response) => {
      console.log(response);
      this.setState({ products: response.data });
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="container">
        {products.map(function (product, index) {
          if (product.categories == 'Grocery') {
            return (
              <div className="box" data-aos="fade">
                <img src={product.image}></img>
                <div className="product">
                  <h4>{product.name}</h4>
                  <p className="price">{product.price} $</p>
                  <p className="stock">{product.stock} in stocks</p>
                  <p className="description">{product.description}</p>
                  <button class="login-signup-button">Add To Cart</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Grocerylist;
