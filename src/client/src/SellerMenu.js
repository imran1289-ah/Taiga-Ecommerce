import React, { Component } from 'react'
import './SellerMenu.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './Login.css'

export class SellerMenu extends Component {
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
            <div className="sellerProductsTable">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stocks</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(function(product, index){
                                if(product.user == "Imran"){
                                    return<tr>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.stock}</td>
                                            <td>{product.categories}</td>
                                            <td className="productImage"><img src={product.image}></img></td>
                                            <td></td>
                                        </tr> 
                                    
                                }
                            })
                        }
                        
                    </tbody>
                </Table>
            </div>
            
            <h3>Add a product</h3>
            <div class="login">
            <form>
                <input class="login-signup-input" 
                    type="text"
                    name="productName"
                    placeholder="Name of Product">
                </input>
                <input class="login-signup-input" 
                    type="text"
                    name="productPrice"
                    placeholder="Price"
                ></input>
                <input class="login-signup-input" 
                    type="text"
                    name="productStock"
                    placeholder="Stock"
                ></input>
                <select class="login-signup-input">
                    <option value="Electronics">Electronic</option>
                    <option value="Clothes" selected>Clothes</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Books">Book</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Toys">Toy</option>
                </select>
                {/* <input class="login-signup-input" 
                    type="text"
                    name="productCategory"
                    placeholder="Category"
                ></input> */}
                <textarea class="login-signup-input" 
                    type="textarea"
                    name="productDescription"
                    placeholder="Description"
                ></textarea>
                <input class="login-signup-input" 
                    type="text"
                    name="productImageURL"
                    placeholder="Image URL"
                ></input>
                <button type="submit" class="login-signup-button">Add product</button>
            </form>
           
        </div>
            
           
            

        </div>
        )
    }
    }

export default SellerMenu
