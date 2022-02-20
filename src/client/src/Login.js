
import React, { useState } from 'react';
import './Login.css'


function Login() {
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

// handle POST login data
  let handleSubmitlogin = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:9000/users/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        window.alert("200 ok")
        setPassword("");
        setEmail("");
        setMessage("User logged in");
      } else {
        setMessage("Some error occured");
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
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: rEmail,
          name: rName,
          password: rPassword,
          userType: document.getElementById("options").options[document.getElementById("options").selectedIndex].text,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        window.alert("200 ok")
        setREmail("");
        setRPassword("");
        setRName("");
        setRMessage("User registered successfully");
      } else {
        setRMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return ( 

    <div class="main">
        

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
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>

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
            </form>
        </div>

    </div>

    
  );
}

export default Login;