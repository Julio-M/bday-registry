import { Button } from "@mui/material";
import React, { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";


const userDefault = {
    name:"",
    loged:false
}

function Login ({postUsers,setUser, dbUser}) { 
    let navigate = useNavigate();

    const [state,setState] = useState(false)
    const [isUser,setIsUser] = useState(userDefault)

    const allUsersName = dbUser.map(user=> user.name)
    const userId = dbUser.map(user=>user.id)

    const handleClick =()=>{
        setState(!state)
    }
    
    const handleChange = (e) => {
        const name = e.target.name
        let value = e.target.value     
        setIsUser({...isUser, 
        [name]:value
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(state && allUsersName.includes(isUser.name)){alert("user exists")}
        if(state){
            postUsers(isUser)
            setState(!state)
        }else if(allUsersName.includes(isUser.name)){
            setUser(isUser.name)
            navigate(`/home`)
        } else {
            alert('User does not exist')
        }
    }

    return (
    <div className="login-box" id={state?"sBoxColor":"boxColor"}>
        <h2>{state?"Sign Up":"Login"}</h2>
        <form onSubmit={handleSubmit}>
            <div className="user-box">
            <input onChange={handleChange} type="text" name="name" required="" value={isUser.name}/>
            <label>Username</label>
            </div>
            <Button type='submit' id='submitLogin'>{state?"Sign Up":"Log In"}</Button>
            <div className='sbutton'>
            <Button onClick={handleClick} id='submitSignUp'>{state?"Go to Log In":"Go to Sign Up"}</Button>
            </div>
        </form>
    </div>
    );
}

export default Login;