import React from 'react';
import './Login.css';
import Button  from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
    const [{}, dispatch] = useStateValue();
    
    const signIn = () => {
        //sign in...
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch(error => alert(error.message))
    };
    return (
        <div className="login"> 
            <div className="login__logo">
                <img
                    src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
        
    )
}

export default Login;
