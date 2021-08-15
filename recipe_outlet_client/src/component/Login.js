import { useState } from "react";
import { useHistory } from 'react-router';

import React from 'react';


const Login = (props) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory(); 

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {name, password}
        props.handleCallback(data)
        window.alert("Welcome Back.")
        history.push("/recipes")
      }
        
        return ( 
            <div className="create">
                <h2>Login</h2>
                <br/>
                <form className="form" onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" required value={name} onChange={handleNameChange} name="name"/>
                    <label>Password:</label>
                    <input type="password" required value={password} onChange={handlePasswordChange} name="password"/>
                    <button type="submit" value="Login">Login User</button>
                </form>
            </div>
        );
    
}
 
export default Login;