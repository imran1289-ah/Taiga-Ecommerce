import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Productlist.css';
import './FilterProducts.css';


export class FilterProducts extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      products: [],
    }
  }

  // Submit button that will filter products
  submitFilter = event => {
    event.preventDefault()
    axios.get('http://localhost:9000/products/search').then((response) => {
      console.log(response);
      this.setState({ products: response.data.filter(product => product.categories ==  document.querySelector('input[name = "category"]:checked').value && ( (product.price >= parseInt(document.getElementById("minPrice").value) && (product.price <= parseInt(document.getElementById("maxPrice").value)) ) ))});
      
    });
  }

  render() {

    const {products} = this.state

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
      <div>
          <br></br>
          <h1 style={{textAlign:'center',color:"white"}}>
              Filter products
          </h1>
          
          <form onSubmit={this.submitFilter}>
          {/* A checkbox for categories */}
          <div className="categoryCheckbox">
            <input type="radio" id="category" name="category"  value="Electronics"/> Electronics
            <input type="radio" id="category" name="category"  value="Clothes"/> Clothes
            <input type="radio" id="category" name="category"  value="Furniture"/> Furniture
            <input type="radio" id="category" name="category"  value="Books"/> Books
            <input type="radio" id="category" name="category"  value="Grocery"/> Grocery
            <input type="radio" id="category" name="category" value="Toys"/> Toys
          </div>

          <br/>

          {/* Max Price and Min Price slider */}
          <div className='priceSlider'>
            <input type="text" id="minPrice" placeholder="Enter Minimum Price"></input>
            <input type="text" id="maxPrice" placeholder="Enter Max Price"></input>
          </div>
            <button style={{width: 500}} type="submit" class="login-signup-button">Filter</button>
          </form>

          {/* Rendering the filter products  */}
          <div className="container">
          {
            products.map(function(product, index){
              
                return<div className="box" data-aos="fade">
                      <img src={product.image}></img>
                      <div className="product">
                        <h4>{product.name}</h4>
                        <p className="price">{product.price} $</p>
                        <p className="stock">{product.stock} in stocks</p>
                        <p className ="stock">Product seller : {product.user}</p>
                        <p className="description">

                            {product.description}
                        </p>
                        {localStorage.usertype == "Customer" && !product.inUserCart.includes(localStorage.email)? <button class="login-signup-button" onClick={() => addToCart(product)}>Add To Cart</button>: null}       
                        {product.inUserCart.includes(localStorage.email)? <h2 class="inCart" >Added to cart ✅</h2>: null}       

                      </div>
                      </div>       
            })
          }  
          </div> 
    </div>
    )
  }
}

export default FilterProducts