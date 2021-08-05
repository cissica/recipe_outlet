import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Login from "../component/Login";
import Register from "../component/Register";
import { saveUser, loggedInStatus, logUser, loginUser } from '../actions/UsersActions';

const Account = (props) => {
    const [user, setUser] = useState({})
  
    const handleStoreUser = () => {
        localStorage.setItem("token", props.token)
        setUser(props.user)
        props.loggedInStatus()
    }
    
    const handleCallback = (user) =>{
      props.saveUser(user)
      handleStoreUser()
    }

    const handleLoginCallback = (user) =>{
      props.logUser(user)
      handleStoreUser()
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
          fetch(`http://localhost:3000/auto_login`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(resp => resp.json())
          .then(data => { 
            loginUser(data)
          })
        }
      }, [])
    
        return ( 
            <div className="accountAuth">
            {user.name && <h3 className="conditionalHeader">"{user.name} currenly logged in"</h3>}
            {!user.name && <h3 className="conditionalHeader">Login or Register please</h3>}
            <Login handleCallback={handleLoginCallback} loginUser={loginUser}/>
            <h3>OR</h3>
            <Register handleCallback={handleCallback} handleStoreUser={handleStoreUser}/>
            </div>
         );
}

function mapStateToProps(state){
    
    return {
        token: state.user.token,
        user: state.user.user,
        loggedIn: state.user.loggedIn
    }
}
 
export default connect(mapStateToProps, { saveUser, loggedInStatus, logUser, loginUser })(Account) ;

