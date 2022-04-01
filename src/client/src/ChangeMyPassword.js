import React, { Component} from 'react'
import './Login.css'
import axios from 'axios'


export class ChangeMyPassword extends Component {
    
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
        if(document.getElementById('pas1').value != "" && document.getElementById('pas2').value == document.getElementById('pas1').value){
            console.log(this.state)
            axios.post("http://localhost:9000/users/updatePassword/"+localStorage.getItem("email"), this.state)
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
        else if(document.getElementById('pas1').value == "" || document.getElementById('pas2').value == ""){
            window.alert("Please enter a value in both fields")
        }
        else if(document.getElementById('pas1').value != document.getElementById('pas2').value){
            window.alert("Please enter the same password in both fields")
        }

    }


    render() {
    const {hashedPassword} = this.state
    
    return (
        //Form for the admin to edit user's password
        <div class="login">
            <br></br>
            <h3>Edit My Password</h3>
            <form onSubmit={this.submitForm}>
                <input id="pas1" class="login-signup-input" 
                    type="password"
                    name="hashedPassword"
                    placeholder="Enter new password"
                    value = {hashedPassword}
                    onChange = {this.changeState}>
                </input>
                <input id="pas2" class="login-signup-input" 
                    type="password"
                    name="hashedPasswordConfirm"
                    placeholder="Confirm new password"
                    onChange = {this.changeState}
                >
                </input>
                <button type="submit" class="login-signup-button" id="button" >Edit Password</button>
            </form>
      </div>
    )
  }
}

export default ChangeMyPassword