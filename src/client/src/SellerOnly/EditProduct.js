import React, { Component} from 'react'
import './EditProduct.css'
import axios from 'axios'


export class EditProduct extends Component {
    
    //State property which will contain all the information of the product that is being eddited
    constructor(props) {
      super(props)
    
      this.state = {
         name:localStorage.getItem("productName"),
         description:localStorage.getItem("productDescription"),
         price:localStorage.getItem("productPrice"),
         image :localStorage.getItem("productImage"),
         stock:localStorage.getItem("productStock"),
         categories:localStorage.getItem("productCategory"),
         user:localStorage.getItem("productUser"),
         
        }
    }

    //Each input is getting updated
    changeState = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    //Api call to edit product
    submitForm = event => {
        event.preventDefault() //No page refresh
        console.log(this.state)
        axios.post("http://localhost:9000/products/update/"+localStorage.getItem("productID"), this.state)
            .then(res => {
                console.log(res)
            })
            .catch (err => {
                console.log(err)
            })
        
        alert("Product Sucesfully Updated");
        localStorage.removeItem("productName");
        localStorage.removeItem("productDescription");
        localStorage.removeItem("productPrice");
        localStorage.removeItem("productImage");
        localStorage.removeItem("productStock");
        localStorage.removeItem("productUser");
        localStorage.removeItem("productCategory");
        localStorage.removeItem("productID");

        document.getElementById('button').disabled = true;
    }


    render() {
    const {name, description, price, image, stock, categories, user} = this.state
    
    return (
        //Form for the seller to edit product
        <div class="edit-product-table">
            <br></br>
            <h3>Edit a product</h3>
            <form onSubmit={this.submitForm}>
                <input class="edit-product-input" 
                    type="text"
                    name="name"
                    placeholder="Name of Product"
                    value = {name}
                    onChange = {this.changeState}>
                        
                </input>
                <input class="edit-product-input" 
                    type="text"
                    name="price"
                    placeholder="Price"
                    value = {price}
                    onChange = {this.changeState}
                ></input>
                <input class="edit-product-input" 
                    type="text"
                    name="stock"
                    placeholder="Stock"
                    value = {stock}
                    onChange = {this.changeState}
                ></input>
                <select class="edit-product-input" name="categories" value={localStorage.getItem("productCategory")} onChange = {this.changeState}>
                    <option value="Electronics">Electronic</option>
                    <option value="Clothes" selected>Clothes</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Books">Book</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Toys">Toy</option>
                </select>
                <textarea class="edit-product-input" 
                    type="textarea"
                    name="description"
                    placeholder="Description"
                    value = {description}
                    onChange = {this.changeState}
                ></textarea>
                <input class="edit-product-input" 
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value = {image}
                    onChange = {this.changeState}
                ></input>
                <input class="edit-product-input" 
                    type="text"
                    name="user"
                    placeholder="Name of Seller"
                    value = {user}
                    onChange = {this.changeState}>
                </input>
                
                    <button type="submit" class="edit-product-button" id="button" >Edit</button>
                
            </form>
      </div>
    )
  }
}

export default EditProduct