import Login from './login/Login'

import React from "react";

function IntroPage ({postUsers,setUser, dbUser}) {
    return (
        <>
            <Login postUsers={postUsers} setUser={setUser} dbUser={dbUser}/>
        </>
    );
}

export default IntroPage;