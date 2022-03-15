import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'

export class AddProduct extends Component {
    
    //State property which will contain all the infromation of the added product
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         description: "",
         price: "",
         image : "",
         stock: "",
         categories: "",
         user: localStorage.username,
        }
    }

    //Each input is getting updated as seller is adding
    changeState = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    //Api call to add product
    submitForm = (event) => {
        event.preventDefault() //No page refresh
        console.log(this.state)
        axios.post("http://localhost:9000/products/create", this.state)
            .then(res => {
                console.log(res)
            })
            .catch (err => {
                console.log(err)
            })
        alert("Product has been added");
        document.getElementById('button').disabled = true;
    }


    render() {
    const {name, description, price, image, stock, categories, user} = this.state

    return (
        //Form for seller to add a product
        <div class="login">
            <br></br>
            <h3>Add a product</h3>
            <form onSubmit={this.submitForm}>
                <input class="login-signup-input" 
                    type="text"
                    name="name"
                    placeholder="Name of Product"
                    value = {name}
                    onChange = {this.changeState}>
                </input>
                <input class="login-signup-input" 
                    type="text"
                    name="price"
                    placeholder="Price"
                    value = {price}
                    onChange = {this.changeState}
                ></input>
                <input class="login-signup-input" 
                    type="text"
                    name="stock"
                    placeholder="Stock"
                    value = {stock}
                    onChange = {this.changeState}
                ></input>
                <select class="login-signup-input" name="categories" value={categories} onChange = {this.changeState}>
                    <option value="" disabled>Select Category</option>
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
                    onChange = {this.changeState}
                ></textarea>
                <input class="login-signup-input" 
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value = {image}
                    onChange = {this.changeState}
                ></input>
                {/* <input class="login-signup-input" 
                    type="text"
                    name="user"
                    placeholder="Name of Seller"
                    value = {user}
                    onChange = {this.changeState}>
                </input> */}
                <button type="submit" class="login-signup-button" id="button">Add product</button>
            </form>
      </div>
    )
  }
}

export default AddProduct