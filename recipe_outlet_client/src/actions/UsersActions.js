export function saveUser(data){
    return (dispatch) => {
        fetch("http://localhost:3000/users", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json" ,
            }
        })
    .then(resp => resp.json())
    .then(data => dispatch({type: "ADD_USER", user: data.user, token: data.jwt}));
    };

}

export function logUser(data){
    console.log("hello")
    return (dispatch) => {
        fetch("http://localhost:3000/login", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json" ,
            }
        })
    .then(resp => resp.json())
    .then(data => dispatch({type: "ADD_USER", user: data.user, token: data.jwt}));
        // dispatch(loginUser(data)));
    }

}

export function loggedInStatus(){
    return (dispatch) => {
    dispatch({type: "LOGGED_IN"})
    }
}


export const loginUser = (data) =>({
    type: "ADD_USER",
    user: data.user, 
    token: data.jwt
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER',
    user: {},
    token: "",
    loggedIn: false
})