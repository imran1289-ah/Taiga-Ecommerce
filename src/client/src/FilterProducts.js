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
  render() {
    

    
    
    return (
      <div>
          <br></br>
          <h1 style={{textAlign:'center',color:"white"}}>
              Filter products
          </h1>
          
          <form>
          {/* A checkbox for categories */}
          <div className="categoryCheckbox">
            <input type="checkbox" id="electronics" name="electronics" value="Electronics"/> Electronics
            <input type="checkbox" id="clothes" name="clothes" value="Clothes"/> Clothes
            <input type="checkbox" id="furniture" name="furniture" value="Furniture"/> Furniture
            <input type="checkbox" id="books" name="books" value="Books"/> Books
            <input type="checkbox" id="grocery" name="grocery" value="Grocery"/> Grocery
            <input type="checkbox" id="toys" name="toys" value="Toys"/> Toys
          </div>

          <br/>

          {/* Max Price and Min Price slider */}
          <div className='priceSlider'>
            <input type="text" name="minPrice" placeholder="Enter Minimum Price"></input>
            <input type="text" name="maxPrice" placeholder="Enter Max Price"></input>
          </div>
            <button style={{width: 500}} type="submit" class="login-signup-button">Filter</button>
          </form>

          

          
      </div>
    )
  }
}

export default FilterProducts