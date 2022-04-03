import React, { Component} from 'react'
import '../Common/Login.css'
import axios from 'axios'


export class EditUser extends Component {
    
    //State property which will contain all the information of the user that is being eddited
    constructor(props) {
      super(props)
    
      this.state = {
         name:localStorage.getItem("userName"),
         email:localStorage.getItem("userEmail"),
         userType:localStorage.getItem("userType"),        
        }
    }

    //Each input is getting updated
    changeState = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    //Api call to edit user
    submitForm = event => {
        event.preventDefault() //No page refresh
        console.log(this.state)
        axios.post("http://localhost:9000/admin/update/"+localStorage.getItem("userID"), this.state)
            .then(res => {
                console.log(res)
            })
            .catch (err => {
                console.log(err)
            })
        
        alert("User Sucesfully Updated");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userType");
        localStorage.removeItem("userID");

        document.getElementById('button').disabled = true;
    }


    render() {
    const {name, email, userType} = this.state
    
    return (
        //Form for the admin to edit user
        <div class="login">
            <br></br>
            <h3>Edit a User</h3>
            <form onSubmit={this.submitForm}>
                <input class="login-signup-input" 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value = {email}
                    onChange = {this.changeState}
                ></input>
               <select class="login-signup-input" name="userType" value={userType} onChange = {this.changeState}>
                    <option value="Customer">Customer</option>
                    <option value="Seller">Seller</option>
                </select>
                <button type="submit" class="login-signup-button" id="button" >Edit</button>
                
            </form>
      </div>
    )
  }
}

export default EditUser