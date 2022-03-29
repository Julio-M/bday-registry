import React, { useState,useEffect } from "react";
import './newitemform.css'

const defaultForm = {
    "title":"",
    "price":0,
    "link":"",
    "image":""
}


function NewItemForm (props) {

const [formData,setFormData] = useState(defaultForm)

const {title,price,image,link} = formData

const formReset = () => {
    setFormData(formData)
}

const handleSubmit = (e) => {
    e.preventDefault()
    formReset()
}

useEffect( () => {
fetch(`http://localhost:3000/users`)
.then( res => res.json())
.then( data => data.forEach(users=>console.log(users)))
.catch( error => console.log(error.message));
},[])

// const postData = () => {
//     fetch('', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify({
//             key: value
//         })
//     })
//     .then( res => res.json())
//     .then( data => console.log(data))
//     .catch( error => console.log(error.message));
// }

const handleChange = (e) => {
    const name= e.target.name
    let value = e.target.value

    setFormData({...formData,
    [name]:value
    })
}



   return (
       <>
            <form onSubmit={handleSubmit} className="form-style-7">
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
                    <input onChange={handleChange} type="text" name="price" value={price}/>
                    <span>Product's price</span>
                </li>
                <li>
                    <label htmlFor="name">Image link</label>
                    <input onChange={handleChange} type="text" name="image" value={image}/>
                    <span>Image url</span>
                </li>
                <li>
                    <input type="submit" value="Send This"/>
                </li>
                </ul>       
        </form>
</>
    );
}

export default NewItemForm;