import { useHistory } from 'react-router';
import { useState } from 'react';

const Register = (props) =>{
   
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const data = {name, password}
        props.handleCallback(data)
        setName("")
        setPassword("")
        window.alert("Thank you for signing up.")
        history.push("/recipes")
    }
        
        return ( 
            <div className="signup">
            <h2>Register</h2>
            <br/>
            <form autocomplete="false" className="form" onSubmit={handleSubmit}> 
                <label>Name:</label>
                <input type="text" required value={name} onChange={handleNameChange} name="name" />
                <label>Password:</label>
                <input type="password" required value={password} onChange={handlePasswordChange} name="password"  />
                <button type="submit" value="Create Account">Create Account</button>
            </form>
        </div>
         );
    
}
 
export default (Register);