import React, { Component} from 'react'
import './ChangePassword.css'
import axios from 'axios'


export class ChangePassword extends Component {
    
    //State property which will contain all the password of the user
    constructor(props) {
        super(props)
      
        this.state = {
           hashedPassword: "",       
          }
      }

    //Each input is getting updated
    changeState = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    //Api call to edit user password
    submitForm = event => {
        event.preventDefault() //No page refresh
        console.log(this.state)
        axios.post("http://localhost:9000/admin/updatePassword/"+localStorage.getItem("userID"), this.state)
            .then(res => {
                console.log(res)
            })
            .catch (err => {
                console.log(err)
            })
        
        alert("User's Password Sucesfully Updated");
        localStorage.removeItem("userID");

        document.getElementById('button').disabled = true;
    }


    render() {
    const {hashedPassword} = this.state
    
    return (
        //Form for the admin to edit user's password
        <div class="change-password">
            <br></br>
            <h3>Edit a User's Password</h3>
            <form onSubmit={this.submitForm}>
                <input class="input" 
                    type="text"
                    name="hashedPassword"
                    placeholder="Enter new password"
                    value = {hashedPassword}
                    onChange = {this.changeState}>
                </input>
                <button type="submit" class="button" id="button" >Edit Password</button>
            </form>
      </div>
    )
  }
}

export default ChangePassword