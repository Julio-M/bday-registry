import RegistryList from './RegistryList'
import React, { useState } from "react";
import './registry.css'


function Registry (props) {
    return (
        <>  
            <div id="searchsortcontainer">
            <input className="searchbox" type="text" placeholder="Search for item 🔍"></input>
            <select className="sortbox"textholder="Sort By">
                <option value="all" >Sort</option>
                <option value="lotohi" >Price: Low to High</option>
                <option value="hitolo" >Price: High to Low</option>
                <option value="alphabetical" >Alphabetically</option>
                <option value="lovescore">Average Love: ♡ </option>
            </select>
            </div>
            <RegistryList/>
        </>
    );
}

export default Registry;