import React, { Component } from 'react'
import axios from 'axios'

class Electronicslist extends Component {
  
  state = {
    products : [],
  }

  componentDidMount(){
    axios.get("http://localhost:9000/products/search?categories=Electronics")
      .then(response => {
        console.log(response);
        this.setState({products: response.data})})
  }
  
  render() {
    const {products} = this.state

    return (
      <div>
          
          {
            products.map(product => 
                
              <div>
                {product.name}
                  
              
              </div>
                 
                
              )
          }
        
        
        
      </div>
    )
  }
}

export default Electronicslist
