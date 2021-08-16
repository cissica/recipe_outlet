import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { loggedInStatus, loginUser, logoutUser } from '../actions/UsersActions';
import { logoutUserFaves } from '../actions/FavesActions';
import { Link } from 'react-router-dom'
import { fetchFaves } from '../actions/FavesActions';
import Faves from '../component/Faves';

const UserFavorites = (props) => {
    
    const history = useHistory(); 
    const userStatus = props.loggedIn
    const faves = props.recipes
    
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
            loggedInStatus();
          })
        }
        if(userStatus === true){
          const currentUserId = props.user.id
          props.fetchFaves(currentUserId)
        }
      }, [])
    

    const handleClick = e => {
        e.preventDefault();
        localStorage.clear();
        props.logoutUser();
        props.logoutUserFaves();
        history.push("/");
      }
  
        return ( 
            <div>
            { !userStatus &&
            <div className="home">
                <h2>Looks like you're not logged in!</h2>
                <br/>
                <h3>If you would like to save recipes to view again later, please log in or register. You won't regret it!</h3>
                <br/>
                <Link to="/register">Count me in.</Link>
            </div>
            }
            
            { userStatus && 
            <div>
                <h2>Hello Welcome Back!</h2>
                <button className="favebutton" onClick={handleClick}>Log Out</button>
                <Faves faves={faves}/>
            </div>
            }
                
              
            </div>
         );
    
}

function mapStateToProps(state){
    
    return {
        recipes: state.favorites.recipes,
        token: state.user.token,
        user: state.user.user[0],
        loggedIn: state.user.loggedIn
    }
}
export default connect(mapStateToProps, { loginUser, loggedInStatus, fetchFaves, logoutUser, logoutUserFaves })(UserFavorites);
