
import React, { useState } from 'react';
import './Login.css'
import axios from 'axios'


const Login = () => {
    // for login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // for register
    const [rEmail, setREmail] = useState('');
    const [rName, setRName] = useState('');
    const [rPassword, setRPassword] = useState('');
    const [rUserType, setRUserType] = useState('');
    const [rMessage, setRMessage] = useState('');




    // handle GET data from logged in user
    let fetchLoggedInUser = (e) => {
      e.preventDefault();
      try {
        let res = fetch('http://localhost:9000/users/search',{
          method: "GET",
          headers: {email: localStorage.email}
        })
        .then(response => response.json())
        .then(data => {
          localStorage.setItem("username", data[0].name);
          localStorage.setItem("usertype", data[0].userType);
        })
        
        
      } catch (err) {
        console.log(err);
      }
    };



// handle POST login data
  let handleSubmitlogin = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:9000/users/login", {
        method: "POST",
        credentials: "include",
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (res.status === 200) {
        localStorage.setItem("email", email);

        // get the currently logged in user info
        axios.get('http://localhost:9000/users/search', {
          method: "GET",
          headers: {email: localStorage.email}
        })
        .then(response => 
          {
            localStorage.setItem("username", response.data[0].name);
            localStorage.setItem("usertype", response.data[0].userType);
          })

        window.location.reload(false);
        window.alert("Welcome back");
        setPassword("");
        setEmail("");
      } else if(res.status === 400){
        setMessage('Missing Email or Password');
        // TODO: Fix this
        document.getElementsByClassName("login-message").style.color ='red';
      } else if(res.status === 401){
        setMessage('Wrong Email or Password');
      } else {
        setMessage("Some error occured with status " + res.status);
      }
      
    } catch (err) {
      console.log(err);
    }
  };


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


 // handle GET logout data
 let handleLogout = async (e) => {
  e.preventDefault();
  try {
    let res = await fetch("http://localhost:9000/users/logout", {
      method: "GET",
      credentials: "include",
      withCredentials: true,
      headers: {
          'Content-Type': 'application/json'},
    });
    if (res.status === 200) {
      localStorage.setItem("email", "Not Logged In");
      localStorage.setItem("username", "");
      localStorage.setItem("usertype", "Not Logged In");
    
      window.location.reload(false);
      window.alert("Logged out with success");
    } else if(res.status === 401){
      setMessage('User not logged in');
    } else {
      setMessage("Some error occured with status " + res.status);
    }
    
  } catch (err) {
    console.log(err);
  }
};




  return ( 

    <div class="main">
        
      {/* LOG IN */}
        <input type="checkbox" id="chk" aria-hidden="true"></input>

        <div class="login">
            <form onSubmit={handleSubmitlogin}>

                <label for="chk" aria-hidden="true">Login</label>

                <input class="login-signup-input" 
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input class="login-signup-input" 
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit" class="login-signup-button">Login</button>
            </form>
            <div>
              <button onClick={fetchLoggedInUser}>
                fetchLoggedInUser
              </button>
            </div>











            {/* LOGOUT */}
            <div>{localStorage.email != "Not Logged In" ?  <button type="logout" class="logout-button" onClick={handleLogout}>Logout</button> : null}</div>
            <div class="login-message" >{message ? <p>{message}</p> : null}</div>
        </div>

















        {/* REGISTER */}
        <div class="signup">
            <form onSubmit={handleSubmitregister}>
                <label for="chk" aria-hidden="true">Sign up</label>
                <input 
                    type="email"
                    name="email"
                    value={rEmail}
                    placeholder="Email"
                    onChange={(e) => setREmail(e.target.value)}
                    class="login-signup-input" 
                    required="">
                </input>
                <input
                    value={rName}
                    onChange={(e) => setRName(e.target.value)}
                    class="login-signup-input" 
                    type="text" 
                    name="txt" 
                    placeholder="Name" r
                    equired="">
                </input>
                <input 
                    value={rPassword}
                    onChange={(e) => setRPassword(e.target.value)}
                    class="login-signup-input" 
                    type="password" 
                    name="pswd" 
                    placeholder="Password" 
                    required="">
                </input>
                <select id="options" class = "login-signup-select">
                        <option value={rUserType}>Customer</option>
                        <option value={rUserType}>Seller</option>
                        <option value={rUserType}>Admin</option>
                </select>

                <button class="login-signup-button">Sign up</button>
                <div class="register-message">{rMessage ? <p>{rMessage}</p> : null}</div>
            </form>
        </div>

    </div>

    
  );
}

export default Login;
