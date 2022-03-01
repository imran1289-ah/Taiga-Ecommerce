import React, { Component } from 'react'
import './SellerMenu.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './Login.css'
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
