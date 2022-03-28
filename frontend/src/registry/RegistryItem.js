import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './registry.css'



function RegistryItem (props) {
    return (
        <>
    <Card id='card' sx={{ maxWidth: 345 }}>
      <CardActionArea id="actionarea">
        <CardMedia 
          component="img"
          height="100%"
          image="https://m.media-amazon.com/images/I/71DUA9yDVWL._AC_UY436_FMwebp_QL65_.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Item Name
          </Typography>
          
          <Typography variant="body1" color="text.secondary">
            Item description goes here
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Price
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button id="purchase" size="medium" color="primary">
          Purchase
        </Button>
      </CardActions>
    </Card>
        </>
    );
}

export default RegistryItem;