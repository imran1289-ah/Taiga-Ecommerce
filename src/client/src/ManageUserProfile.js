import React, { Component} from 'react'
import './Login.css'
import axios from 'axios'

export class ManageUserProfile extends Component {
    
    //State property which will contain all the information of the user that is being eddited
    constructor(props) {
      super(props)
      this.state = {
         name:localStorage.getItem("username"),
         email:localStorage.getItem("email"),       
        }
    }

    
    //Each input is getting updated
    changeState = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    //Api call to edit user
    submitForm = event => {
        if(document.getElementById('name').value != "" && document.getElementById('email').value != ""){
            axios.post("http://localhost:9000/users/update/"+localStorage.getItem("email"), this.state)
            .then(res => {
            })
            .catch (err => {
            })
        
        alert("User Sucesfully Updated");
        localStorage.setItem("username", document.getElementById('name').value );
        localStorage.setItem("email", document.getElementById('email').value);
        }
        else{
            window.alert("fields cannot be empty")
        }

    }


    //Api call which will get all of the products
    // componentDidMount(){
    //     axios.get("http://localhost:9000/products/inUserCart",
    //     {
    //         method: "GET",
    //         headers: {email: localStorage.email}
    //         })
    //         .then(response => {
    //         window.alert(response.data[0].inUserCart);// test purposes >:)
    //         this.setState({products: response.data})})
    //         .catch(console.log("Error fetching products"))
        
    // }

    render() {
    const {name, email} = this.state
    
    
    return (
        //Form for the admin to edit user
        <div class="login">
            <br></br>
            <h3>Edit My Profile</h3>
            <form onSubmit={this.submitForm}>
                <input id="email" class="login-signup-input" 
                    type="email"
                    name="email"
                    placeholder={localStorage.getItem("email")}
                    value = {email}
                    onChange = {this.changeState}>
                </input>
                <input id="name" class="login-signup-input" 
                    type="text"
                    name="name"
                    placeholder={localStorage.getItem("username")}
                    value = {name}
                    onChange = {this.changeState}>
                </input>
                <button type="submit" class="login-signup-button" id="button" >Edit</button> 
            </form>
            <a href="/ChangeMyPassword">
                <button type="submit" class="logout-button">
                    Change Password
                </button>
            </a>
      </div>
      
    )
  }
}

export default ManageUserProfile