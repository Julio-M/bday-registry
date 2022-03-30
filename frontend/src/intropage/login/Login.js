import { Button } from "@mui/material";
import React, { useState } from "react";
import './login.css'

function Login (props) { 
    const [state,setState] = useState(false)

    const handleClick =()=>{
        setState(!state)
    }

    return (
    <div className="login-box" id={state?"sBoxColor":"boxColor"}>
        <h2>{state?"Sign Up":"Login"}</h2>
        <form>
            <div className="user-box">
            <input type="text" name="" required=""/>
            <label>Username</label>
            </div>
            <Button  id='submitLogin'>{state?"Sign Up":"Log In"}</Button>
            <div class='sbutton'>
            <Button onClick={handleClick} id='submitSignUp'>{state?"Go to Log In":"Go to Sign Up"}</Button>
            </div>
        </form>
    </div>
    );
}

export default Login;