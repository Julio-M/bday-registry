import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './registry.css'

function RegistryItem ({product}) {

  const {title,image,link,price} = product

    return (
        <>
    <Card id='card' sx={{ maxWidth: 300} }>
      <CardActionArea id="actionarea">
        <CardMedia 
          sx={{ height: 200}}
          id='productimg'
          component="img"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          
          <Typography variant="body1" color="text.secondary">
            Item description goes here
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions id="purchase-container">
        <Button id="purchase" size="medium" color="primary">
          <img id="amazon-icon" src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Amazon-icon.png" alt="amazon's logo"/> <a href={link} target="_blank" rel="noopener noreferrer">Purchase Item</a></Button>
      </CardActions>
    </Card>
        </>
    );
}

export default RegistryItem;