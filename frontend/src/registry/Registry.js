import RegistryList from './RegistryList'
import React, { useState } from "react";


function Registry (props) {
    return (
        <>  
            <input className="searchbox"type="text" placeholder="Search"></input>
            <RegistryList/>
        </>
    );
}

export default Registry;