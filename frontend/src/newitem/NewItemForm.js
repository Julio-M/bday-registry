import { Button } from "@mui/material";
import React, { useState,useEffect } from "react";


import './newitemform.css'


function NewItemForm ({theId, dbProducts, setDbProducts,postProduct}) {

const [mockValue,setMockValue] = useState("")

const mockscrape = {
    "title":"Oculus Quest 2",
    "price":299.00,
    "link":"https://www.amazon.com/Oculus-Quest-Advanced-All-One-Virtual/dp/B099VMT8VZ/ref=lp_16225016011_1_1",
    "image":"https://m.media-amazon.com/images/I/615YaAiA-ML._SX522_.jpg"
}



//current user's id    
const uid = theId[0]

//default form data
const defaultForm = {
    "title":"",
    "price":0,
    "link":"",
    "image":""
}

const [formData,setFormData] = useState(defaultForm)


const {title,price,image,link} = formData

const formReset = () => {
    setFormData(defaultForm)
}

const handleChange = (e) => {
    const name= e.target.name
    let value = e.target.value

    setFormData({...formData,
    [name]:value,
    "uid":uid
    })
}

const handleMock = (e) => {
    let value=e.target.value
    setMockValue(value)
    if(value==='scrape'){
    setFormData({...formData,
        "title":mockscrape.title,
        "price":mockscrape.price,
        "link":mockscrape.link,
        "image":mockscrape.image,
        "uid":uid
    })
}
}

const handleSubmit = (e) => {
    e.preventDefault()
    postProduct(formData)
    formReset()
}

   return (
       <>
        <form id='myForm' onSubmit={handleSubmit} className="form-style-7">
                <ul>
                <li>
                    <label htmlFor="name">Product's url</label>
                    <input onChange={handleChange} type="text" name="link" value={link}/>
                    <span>Paste the product's url here...</span>
                </li>
                <li>
                    <label htmlFor="name">Title</label>
                    <input onChange={handleChange} type="text" name="title" value={title}/>
                    <span>Product's title</span>
                </li>
                <li>
                    <label htmlFor="name">Price</label>
                    <input onChange={handleChange} type="text" name="price" placeholder="$" value={price}/>
                    <span>Product's price</span>
                </li>
                <li>
                    <label htmlFor="name">Image link</label>
                    <input onChange={handleChange} type="text" name="image" value={image}/>
                    <span>Image url</span>
                </li>
                <li>
                    <Button id='productbtn' type="submit" value="Send This">SUBMIT</Button>
                </li>
                </ul>       
        </form>
        <form id='scrapeform' className="form-style-7">
                <ul>
                <h5>Or paste the product's URL here...</h5>
                <li>
                    <label htmlFor="name">Product's url</label>
                    <input onChange={handleMock} type="text" name="mockscrape" value={mockValue}/>
                    <span>Paste the product's url here...</span>
                </li>
                </ul>       
        </form>
        </>
    );
}

export default NewItemForm;