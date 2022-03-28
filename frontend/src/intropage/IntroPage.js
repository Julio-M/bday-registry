import Login from './login/Login'
import SignUp from './signup/SignUp'

import React, { useState } from "react";

function IntroPage (props) {
    return (
        <>
            <h1>Intro page</h1>
            <Login/>
            <SignUp/>
        </>
    );
}

export default IntroPage;