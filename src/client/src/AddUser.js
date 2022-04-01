import React, { useState } from 'react';
import './AddUser.css'
import axios from 'axios'


const AddUser = () => {
    
    // for adding a new user
    const [rEmail, setREmail] = useState('');
    const [rName, setRName] = useState('');
    const [rPassword, setRPassword] = useState('');
    const [rUserType, setRUserType] = useState('');
    const [rMessage, setRMessage] = useState('');

    // handle POST register data
  let handleSubmitregister = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:9000/users/register", {
        method: "POST",
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: rEmail,
          name: rName,
          password: rPassword,
          userType: document.getElementById("options").options[document.getElementById("options").selectedIndex].text,
        }),
      });
      
      if (res.status === 201) {
        setREmail("");
        setRPassword("");
        setRName("");
        setRMessage(rName + " registered successfully");
      } else {
        setRMessage("Some error occured with status " + res.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

    return ( 

    <div class="main">
        {/* Adds a new user */}
        <div class="add-user">
            <form onSubmit={handleSubmitregister}>
                <label for="chk" aria-hidden="true">Add a new user</label>
                <input 
                    type="email"
                    name="email"
                    value={rEmail}
                    placeholder="Email"
                    onChange={(e) => setREmail(e.target.value)}
                    class="add-user-input" 
                    required="">
                </input>
                <input
                    value={rName}
                    onChange={(e) => setRName(e.target.value)}
                    class="add-user-input" 
                    type="text" 
                    name="txt" 
                    placeholder="Name" r
                    equired="">
                </input>
                <input 
                    value={rPassword}
                    onChange={(e) => setRPassword(e.target.value)}
                    class="add-user-input" 
                    type="password" 
                    name="pswd" 
                    placeholder="Password" 
                    required="">
                </input>
                <select id="options" class = "add-user-select">
                        <option value={rUserType}>Customer</option>
                        <option value={rUserType}>Seller</option>
                        <option value={rUserType}>Admin</option>
                </select>

                <button class="add-user-button">Sign up</button>
                <div class="add-user-message">{rMessage ? <p>{rMessage}</p> : null}</div>
            </form>
        </div>

    </div>
    );
}

export default AddUser;