import React, { Component } from 'react'
import './SellerMenu.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './Login.css'
import { Nav, NavLink } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export class SellerMenu extends Component {
    
    //A state property which contains the information of the products of the seller
    constructor(props) {
        super(props)
      
        this.state = {
            products : [],
          }
    }

    //Api call which will get all of the products
    componentDidMount(){
        axios.get("http://localhost:9000/products/search")
          .then(response => {
            console.log(response);
            this.setState({products: response.data})})
          .catch(console.log("Error fetching products"))
        
    }
    
    render() {
        const {products} = this.state

        //Adding all of the products into the local storage once seller edits a product
        const saveProduct = (product) => {
            let {name, price, stock, categories, description, image, user, _id } = product;
            localStorage.setItem("productName", name);
            localStorage.setItem("productPrice", price);
            localStorage.setItem("productStock", stock);
            localStorage.setItem("productCategory", categories);
            localStorage.setItem("productDescription", description);
            localStorage.setItem("productImage", image);
            localStorage.setItem("productUser", user);
            localStorage.setItem("productID", _id );
        }

        //Api call to delete selected product
        const deleteProduct = (product) => {
            let {_id, name} = product
            localStorage.setItem("productID", _id)
            axios.delete("http://localhost:9000/products/delete/"+localStorage.getItem("productID"))
                .then(response => {
                    console.log(response.data)
                } )
                .catch (err => {
                    console.log(err)
                })
            
            localStorage.removeItem("productID")
            alert("Product "+product.name+" has been deleted")
            window.location.reload(false);
        }

        
        

        return (
        <div>
            <br></br>
            {/* Table which contains all the products seller*/}
            <div className="sellerProductsTable">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stocks</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(function(product, index){
                                //Add the name of the seller that is logged in. Will render all products that logged in seller has.
                                if(product.user == localStorage.username){
                                    return<tr>
                                            <td >{product.name}</td>
                                            <td >{product.price}</td>
                                            <td >{product.stock}</td>
                                            <td>{product.categories}</td>
                                            <td className="productImage"><img src={product.image}></img></td>
                                            <td>
                                                 <Link to="/EditProduct">
                                                    <button type="submit" class="login-signup-button" onClick={() => saveProduct(product)}>
                                                        Edit
                                                    </button>
                                                </Link>
                                                
                                                <button type="sumbit" class="delete-button" onClick={() => deleteProduct(product)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr> 
                                }
                            })
                        }
                    </tbody>
                </Table>
            </div>
            
            {/* Button for seller to Add a product */}
            <NavLink href="/AddProduct">
                <button type="submit" class="login-signup-button">
                    Add Product
                </button>
            </NavLink>
        </div>
        )
    }
}

export default SellerMenu
