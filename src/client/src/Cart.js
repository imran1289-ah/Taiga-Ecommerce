import React, { Component } from 'react'
import './SellerMenu.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './Login.css'
import { Nav, NavLink } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export class Cart extends Component {
    
    //A state property which contains the information of the products of the seller
    constructor(props) {
        super(props)
      
        this.state = {
            products : [],
          }
    }

    //Api call which will get all of the products
    componentDidMount(){
        axios.get("http://localhost:9000/products/inUserCart",
        {
            method: "GET",
            headers: {myUserId: localStorage.myUserId}
          })
          .then(response => {
            //window.alert(response.data[0].inUserCart);// test purposes >:)
            this.setState({products: response.data})})
          .catch(console.log("Error fetching products"))
        
    }
    
    render() {
        const {products} = this.state

        //Api call to remove from cart
        const removeProduct = (product) => {
            let {_id, name} = product
            localStorage.setItem("productID", _id)
            axios.post("http://localhost:9000/products/removeFromCart/"+localStorage.getItem("productID"), {
                method: "POST",
                myUserId: localStorage.myUserId
              })
                .then(response => {
                    window.alert(localStorage.email)
                    
                } )
                .catch (err => {
                    window.alert(err)
                })
            
            localStorage.removeItem("productID")
            alert("Product "+product.name+" has been removed from cart")
            window.location.reload(false);
        }

        //Api call to "Buy"
        const buyItem = (product) => {
            let {_id, name} = product
            localStorage.setItem("productID", _id)
            axios.post("http://localhost:9000/products/removeFromCart/"+localStorage.getItem("productID"), {
                method: "POST",
                myUserId: localStorage.myUserId
                })
                .then(response => {
                    window.alert(localStorage.email)
                } )
                .catch (err => {
                    window.alert(err)
                })
            
            localStorage.removeItem("productID")
            alert("Product "+product.name+" was purchased with success! Thank you for shopping with Taiga! 😁")
            window.location.reload(false);
        }

        return (
        <div>
            <br></br>
            <div><h1 class="Titles">My cart 🛒</h1></div>
            <div className="sellerProductsTable">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(function(product, index){
                    // Maybe add the name of the sellers eventually
                            return<tr>
                                    <td >{product.name}</td>
                                    <td>{product.user}</td>
                                    <td >{product.price}</td>
                                    <td>{product.categories}</td>
                                    <td className="productImage"><img src={product.image}></img></td>
                                    <td>
                                        

                                        <button type="sumbit" class="login-signup-button" onClick={() => buyItem(product)}>
                                            Buy Item
                                        </button>

                                        <button type="sumbit" class="delete-button" onClick={() => removeProduct(product)}>
                                            Remove Item
                                        </button>
                                    </td>
                                    </tr> 
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
        )
    }
}

export default Cart
