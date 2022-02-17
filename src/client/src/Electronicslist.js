import React, { Component } from 'react'
import axios from 'axios'

class Electronicslist extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:9000/products/search")
      .then(response => {
        console.log(response)
        this.setState({posts: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  render() {
    const {posts} = this.state
    return (
      <div>
        Electronicslist
      {
        posts.length ?
        posts.map(post => <div key={post.categories}>{post.name}</div>) :
        null
      }
      </div>
    )
  }
}

export default Electronicslist
