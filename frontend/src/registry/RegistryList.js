import RegistryItem from './RegistryItem'
import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function RegistryList (props) {


    const myproducts = [0,1,2,3,4,5,6,7,8]

    const diplayprod = myproducts.map(prod=> <Grid item><RegistryItem/></Grid>)

    return (
        <>
        <Grid id="grid-section"container justifyContent='center' rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
            {diplayprod}
        </Grid>
        </>
    );
}

export default RegistryList;