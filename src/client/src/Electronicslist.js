import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Productlist.css'

class Electronicslist extends Component {
  
  state = {
    products : [],
  }

  componentDidMount(){
    axios.get("http://localhost:9000/products/search")
      .then(response => {
        console.log(response);
        this.setState({products: response.data})})
  }
  
  render() {
    const {products} = this.state

    return (
      <div>
          
          {/* {
          products.map(product => 
                
              <div>
                {product.name}
                  
              
              </div>
                 
                
              )
          } */}

          {
            products.map(function(product, index){
              if(product.categories == "Electronics"){
                return <div> 
                 
                      
                  
                  <img src={product.image} alt="Electronics"></img> 
                  <h3>{product.name}</h3> <p>{product.price} $</p> 
                  <p>{product.stock} in stocks</p> <p>{product.description}</p> 
                  <button class="addtocardbutton">Add to cart</button> 
                      

                 
                 
                 
                      
                    
                    
                  
                  </div>
                  
              }
            })
          }


        
        
        
      </div>
    )
  }
}

export default Electronicslist
