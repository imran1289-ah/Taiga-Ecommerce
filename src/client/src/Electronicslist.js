import React, { Component } from 'react'
import axios from 'axios'

class Electronicslist extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       products: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:9000/products/search")
      .then(response => {console.log(response)})
      .catch(error => {console.log(error)})
  }
  
  render() {
    const {products} = this.state

    return (
      <div>
      
        
        
        
      </div>
    )
  }
}

export default Electronicslist
