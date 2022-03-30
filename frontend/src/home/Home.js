import React, { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from "react-router-dom"
import './home.css'

function Home (props) {

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1491927570842-0261e477d937',
          title: 'Headphones On Person',
        },
        {
            img: 'https://images.unsplash.com/photo-1522001947148-8b4dfe064edc',
            title: 'Jewelry',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
      ];

    return (
        <>
            <ImageList cols={7} rowHeight={300}>
                    {itemData.map((item) => (
                <ImageListItem id="container" key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>

            <Stack id="btn"spacing={3} direction="column">
                <Button className="homeButton" size="large" variant="outlined"><Link className="link" to="/newitemform">Add New Item to Registry</Link></Button>
                <Button className="homeButton" size="large"variant="outlined"><Link className="link"to="/registry">Check My Registry</Link></Button>
            </Stack>


            

        </>
    );
}

export default Home;