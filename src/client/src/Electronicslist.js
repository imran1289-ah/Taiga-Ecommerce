import React, { Component } from 'react'
import axios from 'axios'

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
          {/* {products.filter(product => {
              if(product.categories=="Electronics"){
                  return product
              }
          } ).*/}
          {
          products.map(product => 
                
              <div key={product.categories="Electronics"}>
                {product.name}
                  
              
              </div>
                 
                
              )
          }
        
        
        
      </div>
    )
  }
}

export default Electronicslist
