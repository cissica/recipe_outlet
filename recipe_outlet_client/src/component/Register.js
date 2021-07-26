import React, { Component } from 'react';
import { addUser } from "../actions/UsersActions";
import { connect }  from "react-redux";
import { Redirect } from "react-router-dom"
class Register extends Component {

    state = { name: '',
            redirect: null
    }

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser(this.state);
        this.setState({redirect: "/"});
    }

    render() { 
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        return ( 
            <div className="create">
            <h2>Register Form</h2>
            <form onSubmit={this.handleSubmit}> 
                <label>Name:</label>
                <input type="text" required value={this.state.name} onChange={this.handleChange} name="name"/>
                <input type="submit" value="Create Account"/>
            </form>
        </div>
         );
    }
}
 
export default connect(null, { addUser })(Register);