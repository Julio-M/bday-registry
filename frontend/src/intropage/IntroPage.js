import Login from './login/Login'

import React from "react";

function IntroPage ({postUsers,setUser, dbUser,patchData} ) {
    return (
        <>
            <Login postUsers={postUsers} setUser={setUser} dbUser={dbUser} pathcData={patchData}/>
        </>
    );
}

export default IntroPage;