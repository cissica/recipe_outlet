import React, { useState } from 'react';
import { connect } from 'react-redux';
import Login from "../component/Login";
import Register from "../component/Register";
import { saveUser, loggedInStatus, logUser, loginUser } from '../actions/UsersActions';

const Account = (props) => {
    const [currentUser, setUser] = useState({})
    
    const handleCallback = (param) =>{
      props.saveUser(param)
      handleStoreUser()
    }

    const handleLoginCallback = (param) =>{
      props.logUser(param)
      handleStoreUser()
    }

    const handleStoreUser = () => {
        console.log(props)
        localStorage.setItem("token", props.token)
        setUser(props.user)
        props.loggedInStatus()
        console.log(localStorage.getItem("token"))
    }

    
        return ( 
            <div>
            {props.loggedIn&& 
                <h3 className="conditionalHeader">
                <h2>{props.user.name} currenly logged in</h2>
                </h3>}
            {!props.loggedIn && 
                <div className="accountAuth"> 
                <Login handleCallback={handleLoginCallback} loginUser={loginUser}/>
                <h3>OR</h3>
                <Register handleCallback={handleCallback} handleStoreUser={handleStoreUser}/>
                </div>}
            </div>
         );
}

function mapStateToProps(state){
    
    return {
        token: state.user.token,
        user: state.user.user[0],
        loggedIn: state.user.loggedIn
    }
}
 
export default connect(mapStateToProps, { saveUser, loggedInStatus, logUser, loginUser })(Account) ;

