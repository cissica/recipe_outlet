import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Login from "../component/Login";
import Register from "../component/Register";
import { saveUser, loggedInStatus, logUser, loginUser } from '../actions/UsersActions';

const Account = (props) => {
    const [currentUser, setUser] = useState({})
    // rerenders when state changes
    
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
    // useEffect(() => {
    //     const token = localStorage.getItem("token")
    //     if(token){
    //       fetch(`http://localhost:3000/auto_login`, {
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         }
    //       })
    //       .then(resp => resp.json())
    //       .then(data => { 
    //         loginUser(data)
    //       })
    //     }
    //   }, [])
    
        return ( 
            <div>
            {props.loggedIn&& 
                <h3 className="conditionalHeader">
                "{currentUser.name} currenly logged in"
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
        user: state.user[0],
        loggedIn: state.user.loggedIn
    }
}
 
export default connect(mapStateToProps, { saveUser, loggedInStatus, logUser, loginUser })(Account) ;

