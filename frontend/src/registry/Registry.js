import RegistryList from './RegistryList'
import React, { useState } from "react";
import './registry.css'


function Registry ({dbProducts, theId, deleteProduct,setSearch,sortItems}) {

    const handleOnChange = (e)=> {
        setSearch(search => search=e.target.value)
    }

    const handleOnSort = (e) => {
        let value = e.target.value
        sortItems(value)
    }

    return (
        <>  
            <div id="searchsortcontainer">
            <input className="searchbox" onChange={handleOnChange} type="text" placeholder="Search for item 🔍"></input>
            <select onChange={handleOnSort} className="sortbox"textholder="Sort By">
                <option value="all" >Sort</option>
                <option value="lotohi" >Price: Low to High</option>
                <option value="hitolo" >Price: High to Low</option>
            </select>
            </div>
            <RegistryList dbProducts={dbProducts} theId={theId} deleteProduct={deleteProduct}/>
        </>
    );
}

export default Registry;