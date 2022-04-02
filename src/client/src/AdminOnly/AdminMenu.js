import React, { Component } from 'react'
import '../SellerOnly/SellerMenu.css'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './AdminMenu.css'
import { Nav, NavLink } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

export class AdminMenu extends Component {
    
    //A state property which contains the information of the products of the seller
    constructor(props) {
        super(props)
      
        this.state = {
            users : [],
          }
    }

    //Api call which will get all of the products
    componentDidMount(){
        axios.get("http://localhost:9000/admin/search")
          .then(response => {
            console.log(response);
            this.setState({users: response.data})})
          .catch(console.log("Error fetching users"))
        
    }
    
    render() {
        const {users} = this.state

        //Adding all of the products into the local storage once seller edits a product
        const saveUser = (user) => {
            let {name, email, userType, _id } = user;
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userType", userType);
            localStorage.setItem("userID", _id );            
        }

        const saveUserID = (user) => {
            let {_id} = user;
            localStorage.setItem("userID", _id);
        }

        //Api call to ban selected user
        const BanUser = (user) => {
            let {_id, name} = user
            localStorage.setItem("userID", _id)
            axios.delete("http://localhost:9000/admin/ban/"+localStorage.getItem("userID"))
                .then(response => {
                    console.log(response.data)
                } )
                .catch (err => {
                    console.log(err)
                })
            
            localStorage.removeItem("userID")
            alert("User "+user.name+" has been banned forever")
            window.location.reload(false);
        }

        
        

        return (
        <div>
            <br></br>
            {/* Table which contains all the users*/}
            <div className="sellerProductsTable">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Pasword</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(function(user, index){
                                //Add the name of the seller that is logged in. Will render all products that logged in seller has.
                                if(user.userType=="Customer" || user.userType == "Seller"){
                                    return<tr>
                                            <td >{user.email}</td>
                                            <td >
                                                <Link to="/ChangePassword">
                                                    <button type="submit" class="button" onClick={() => saveUserID(user)}>
                                                        Change Password
                                                    </button>
                                                </Link>
                                            </td>
                                            <td>{user.userType}</td>
                                            <td>
                                                 <Link to="/EditUser">
                                                    <button type="submit" class="button" onClick={() => saveUser(user)}>
                                                        Edit
                                                    </button>
                                                </Link>
                                                
                                                <button type="sumbit" class="delete-button" onClick={() => BanUser(user)}>
                                                    Ban
                                                </button>
                                            </td>
                                        </tr> 
                                }
                            })
                        }
                    </tbody>
                </Table>
            </div>
            
            {/* Button for seller to Add a user */}
            <NavLink href="/AddUser">
                <button type="submit" class="login-signup-button">
                    Add New User
                </button>
            </NavLink>
        </div>
        )
    }
}

export default AdminMenu
