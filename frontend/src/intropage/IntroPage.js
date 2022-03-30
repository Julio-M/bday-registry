import Login from './login/Login'

import React from "react";

function IntroPage ({postUsers,setUser}) {
    return (
        <>
            <Login postUsers={postUsers} setUser={setUser}/>
        </>
    );
}

export default IntroPage;