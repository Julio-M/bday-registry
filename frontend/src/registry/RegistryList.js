import RegistryItem from './RegistryItem'
import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import './registry.css'

function RegistryList ({dbProducts,theId, deleteProduct}) {

  //     if(comic.id===data.id) return data
//   //     return comic


    const uid = theId[0]
    const diplayprod = dbProducts.map(prod => {
        if(prod.uid===uid){
            return <Grid key={prod.id} item><RegistryItem id='myproducts' product={prod} deleteProduct={deleteProduct}/></Grid>
            }
        })

    const testdisplay = diplayprod.map(prod=>prod)

    //console.log(testdisplay)

    return (
        <>
        <Grid id="grid-section" container justifyContent='center' rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
            {diplayprod}
        </Grid>
        </>
    );
}

export default RegistryList;