import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Productlist.css';
import { Dropdown } from 'react-bootstrap';

class Toyslist extends Component {
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
            //Api call to add to cart
            const addToCart = (product) => {
              let {_id } = product;
              localStorage.setItem("productID", _id)
              axios.post("http://localhost:9000/products/AddtoCart/"+localStorage.getItem("productID"), {
                  method: "POST",
                  email: localStorage.email
                  })
                  .then(response => {
                      // window.alert(localStorage.email)
                      
                  } )
                  .catch (err => {
                      window.alert(err)
                  })
              
              localStorage.removeItem("productID")
              alert("Product "+product.name+" was added to the cart with success!")
              window.location.reload(false);
          }

    return (
      <div className="container">
        {products.map(function (product, index) {
          if (product.categories == 'Toys') {
            return (
              <div className="box" data-aos="fade">
                <img src={product.image}></img>
                <div className="product">
                  <h4>{product.name}</h4>
                  <p className="price">{product.price} $</p>
                  <p className="stock">{product.stock} in stocks</p>
                  <p className ="stock">Product seller : {product.user}</p>
                  <p className="description">{product.description}</p>
                  {localStorage.usertype == "Customer" && !product.inUserCart.includes(localStorage.email)? <button class="login-signup-button" onClick={() => addToCart(product)}>Add To Cart</button>: null}       
                  {product.inUserCart.includes(localStorage.email)? <h2 class="inCart" >Added to cart ✅</h2>: null}                  </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
 
export default Toyslist;
