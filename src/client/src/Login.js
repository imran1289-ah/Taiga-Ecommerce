
import React, { useState } from 'react';
import './Login.css'

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
            <div class="main">  	
                <input type="checkbox" id="chk" aria-hidden="true"></input>
        
                    <div class="login">
                        <form>
                            <label for="chk" aria-hidden="true">Login</label>
                            <input class="login-signup-input" type="email" name="email" placeholder="Email" required=""></input>
                            <input class="login-signup-input" type="password" name="pswd" placeholder="Password" required=""></input>
                            <button class="login-signup-button">Login</button>
                        </form>
                    </div>

                    <div class="signup">
                        <form>
                            <label for="chk" aria-hidden="true">Sign up</label>
                            <input class="login-signup-input" type="email" name="email" placeholder="Email" required=""></input>
                            <input class="login-signup-input" type="text" name="txt" placeholder="Name" required=""></input>
                            <input class="login-signup-input" type="password" name="pswd" placeholder="Password" required=""></input>
                            <input class="login-signup-input" type="address" name="address" placeholder="Address" required=""></input>
                            <input class="login-signup-input" type="password" name="CreditCardNumber" placeholder="Credit Card Number" required=""></input>
                            <select class = "login-signup-select">
                                <option value="customer">Customer</option>
                                <option value="seller">Seller</option>
                                <option value="admin">Admin</option>
                            </select>

                            <button class="login-signup-button">Sign up</button>
                        </form>
                    </div>
            </div>
    )
}

export default Login;