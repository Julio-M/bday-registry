import { Button } from "@mui/material";
import React, { useState,useEffect } from "react";


import './newitemform.css'



function NewItemForm ({theId, dbProducts, setDbProducts,postProduct}) {

const [mockValue,setMockValue] = useState("")

const mockscrape = {
    "title":"Marsail Gel Memory Foam Pillows ",
    "price":24.99 ,
    "link":"https://www.amazon.com/Marsail-Sleeping-Adjustable-Sleepers-Washable/dp/B097PW43LG/ref=sr_1_1_sspa?keywords=pillows&qid=1648661276&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExV01OS1ZaQjJCQ0xLJmVuY3J5cHRlZElkPUEwMDgzMjE1MVFSNlRSV0ZJVzBDVSZlbmNyeXB0ZWRBZElkPUEwNTI1Njk3M0RVS0NWSUIxVlBMMiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    "image":"https://m.media-amazon.com/images/I/61uij0Tv0pL._AC_SX679_.jpg"
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