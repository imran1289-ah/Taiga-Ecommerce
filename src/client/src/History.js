import React, { Component } from 'react'
import './SellerMenu.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './Common/Login.css'
import { Nav, NavLink } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export class History extends Component {
    
    //A state property which contains the information of the products of the seller
    constructor(props) {
        super(props)
      
        this.state = {
            products : [],
          }
    }

    //Api call which will get all of the products
    componentDidMount(){
        axios.get("http://localhost:9000/products/inUserHistory",
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
            axios.post("http://localhost:9000/products/removeFromHistory/"+localStorage.getItem("productID"), {
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
            alert(product.name+" has been removed from History")
            window.location.reload(false);
        }

        return (
        <div>
            <br></br>
            <div><h1 class="Titles">Purchase History 🛍 </h1></div>
            <div className="sellerProductsTable">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            {/* <th>Seller</th> */}
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
                                    {/* <td>{product.user}</td> */}
                                    <td >{product.price}</td>
                                    <td>{product.categories}</td>
                                    <td className="productImage"><img src={product.image}></img></td>
                                    
                                    <td>
                                        <button type="sumbit" class="delete-button" onClick={() => removeProduct(product)}>
                                            Delete From History
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

export default History
