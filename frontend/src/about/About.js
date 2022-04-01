import React, { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './about.css'

function About (props) {

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1525268771113-32d9e9021a97',
          title: 'Birthday Balloons',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1512909481869-0eaa1e9817ba',
          title: 'Opening Present',
        },
        {
          img: 'https://images.unsplash.com/photo-1635166304779-8ebcfe8e57bd',
          title: 'Little Present',
        },
        {
          img: 'https://images.unsplash.com/photo-1559455208-f82921450174',
          title: 'Birthday Sign',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1513726214296-1f2e95e452d8',
          title: 'Gifts',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1566674717261-e3b344428702',
          title: 'Dog in Party Hat',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1610988645974-eea992aef7c8',
          title: 'girl with gifts behind her',
        },
        {
          img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92',
          title: 'Balloons',
        },
      ];


      function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }

    return (
        <>
            <div id="wrapper">
            <div id="imagecontainer">
            <ImageList
      sx={{ width: 500, height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>

    <div id="textcontainer">
    <p className="aboutsection">
                Shower yourself with the perfect gifts with the GetList! Curate a wish list for your special day to share with your friends and family. 
                <br>
                </br>
                <br>
                </br>
                 Sign up and instantly start adding items onto your gift list! 
            </p>
    </div>
    </div>


        </>
    );
}

export default About;