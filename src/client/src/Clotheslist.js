import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Productlist.css';
import { Dropdown } from 'react-bootstrap';

class Clotheslist extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      products: [],
    }
  }

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
          if (product.categories == 'Clothes') {
            return (
              <div className="box" data-aos="fade">
                <img src={product.image}></img>
                <div className="product">
                  <h4>{product.name}</h4>
                  <p className="price">{product.price} $</p>
                  <p className="stock">{product.stock} in stocks</p>
                  <p className ="stock">Product seller : {product.user}</p>
                  <p className="description">{product.description}</p>
                  {localStorage.usertype == "Customer"? <button class="login-signup-button">Add To Cart</button>: null}       
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Clotheslist;
