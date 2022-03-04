import React, { Component } from 'react'
import './SellerMenu.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './Login.css'
import { Nav, NavLink } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export class SellerMenu extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            products : [],
          }
      }
    
    componentDidMount(){
        axios.get("http://localhost:9000/products/search")
          .then(response => {
            console.log(response);
            this.setState({products: response.data})})
    }

    

      

      
      

    render() {
        const {products} = this.state

        const setData = (product) => {
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

        const deleteProduct = (product) => {
            let {_id, name} = product
            localStorage.setItem("productID", _id)
            localStorage.setItem("productName", name)
            axios.delete("http://localhost:9000/products/delete/"+localStorage.getItem("productID"))
                .then(response => {
                    console.log(response.data)
                } )
                .catch (err => {
                    console.log(err)
                })
            localStorage.removeItem("productID")
            
            alert("Product "+product.name+" has been deleted")
            localStorage.removeItem("productName");
            window.location.reload(false);


        }

        
        

        return (
        <div>
            <br></br>
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
                                            <td >{product.name}</td>
                                            <td >{product.price}</td>
                                            <td >{product.stock}</td>
                                            <td>{product.categories}</td>
                                            <td className="productImage"><img src={product.image}></img></td>
                                            <td>
                                                 <Link to="/EditProduct">
                                                    <button type="submit" class="login-signup-button" onClick={() => setData(product)}>
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
