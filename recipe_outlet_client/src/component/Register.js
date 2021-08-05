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
        history.push("/userFaves")
    }
        
        return ( 
            <div className="signup">
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}> 
                <label>Name:</label>
                <input type="text" required value={name} onChange={handleNameChange} name="name" />
                <label>Password:</label>
                <input type="password" required value={password} onChange={handlePasswordChange} name="password" />
                <input type="submit" value="Create Account"/>
            </form>
        </div>
         );
    
}
 
export default (Register);