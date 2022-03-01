import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'

export class AddProduct extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         description: "",
         price: "",
         image : "",
         stock: "",
         categories: "",
         user: "",
        }
    }

    //Each input is getting updated
    KeepInSync = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitForm = event => {
        event.preventDefault() //No page refresh
        console.log(this.state)
        axios.post("http://localhost:9000/products/search", this.state)
            .then(res => {
                console.log(res)
            })
            .catch (err => {
                console.log(err)
            })
    }


    render() {
    const {name, description, price, image, stock, categories, user} = this.state

    return (
        <div class="login">
            <br></br>
            <h3>Add a product</h3>
            <form onSubmit={this.submitForm}>
                <input class="login-signup-input" 
                    type="text"
                    name="name"
                    placeholder="Name of Product"
                    value = {name}
                    onChange = {this.KeepInSync}>
                </input>
                <input class="login-signup-input" 
                    type="text"
                    name="price"
                    placeholder="Price"
                    value = {price}
                    onChange = {this.KeepInSync}
                ></input>
                <input class="login-signup-input" 
                    type="text"
                    name="stock"
                    placeholder="Stock"
                    value = {stock}
                    onChange = {this.KeepInSync}
                ></input>
                <select class="login-signup-input" name="categories" value={categories} onChange = {this.KeepInSync}>
                    <option value="Electronics">Electronic</option>
                    <option value="Clothes" selected>Clothes</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Books">Book</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Toys">Toy</option>
                </select>
                <textarea class="login-signup-input" 
                    type="textarea"
                    name="description"
                    placeholder="Description"
                    value = {description}
                    onChange = {this.KeepInSync}
                ></textarea>
                <input class="login-signup-input" 
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value = {image}
                    onChange = {this.KeepInSync}
                ></input>
                <input class="login-signup-input" 
                    type="text"
                    name="user"
                    placeholder="Name of Seller"
                    value = {user}
                    onChange = {this.KeepInSync}>
                </input>
                <button type="submit" class="login-signup-button">Add product</button>
            </form>
      </div>
    )
  }
}

export default AddProduct