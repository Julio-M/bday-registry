import React, { useState,useEffect } from "react";
import './App.css';
import Home from './home/Home'
import IntroPage from './intropage/IntroPage'
import NewItemForm from './newitem/NewItemForm'
import NavBar from './navbar/Navbar'
import Footer from './footer/Footer'
import EditUserForm from './edituser/EditUserForm'
import About from './about/About'
import Registry from './registry/Registry'
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import { Container } from '@mui/material';


const postUsers = (formData) => {

  console.log(formData)
  fetch(usersUrl, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify(
          formData
      )
  })
  .then( res => res.json())
  .then( data => console.log(data))
  .catch( error => console.log(error.message));
 }


const usersUrl = 'http://localhost:3000/users'
const productsUrl = 'http://localhost:3000/products'

function App() {

  const [user, setUser] = useState("")

  const [dbUser,setDbUser] = useState([])

  const [dbProducts, setDbProducts] = useState([])

  //Fetch data from the database - used arguments to access both users and products with same function
  const getData = (set,url) => {
    fetch(url)
    .then( res => res.json())
    .then( data => set(data))
    .catch( error => console.log(error.message));
  }

  const users = dbUser.filter(data => data.name.includes(user))
  const theId = users.map(id=>id.id)

  //When user is loged in change loged status to true
  const patchData = () => {
    fetch(`${usersUrl}/${theId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
          loged:true
        })
    })
    .then( res => res.json())
    .catch( error => console.log(error.message));
  }

//Run the function whenever the user is changed
  useEffect( () => {
    patchData()
  },[user])


  //Fetch Users and products when page is loaded
  useEffect( () => {
  getData(setDbUser,usersUrl)
  getData(setDbProducts,productsUrl)
  },[])

  //Post new product to the database
  const postProduct = (productData) => {
    fetch(productsUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(
          productData
        )
    })
    .then( res => res.json())
    .then( data => console.log(data))
    .catch( error => console.log(error.message));
  }

  //Delete product from the database
  const deleteProduct = (deleteItem) => {
    fetch(`http://localhost:3000/products/${deleteItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(setDbProducts(dbProducts.filter(product => product.id !== deleteItem.id)))
  }


  //Store components in a form of objects
  const components = [
    { name: <Home />, path:'/home'},
    { name: <NewItemForm theId={theId} dbProducts={dbProducts} setDbProducts={setDbProducts} postProduct={postProduct}/>, path:'/newitemform'},
    { name: <IntroPage postUsers={postUsers} setUser={setUser} dbUser={dbUser}/>, path:'/intropage'},
    { name: <EditUserForm/>, path:'/edituserform'},
    { name: <About/>,path:'/about'},
    { name: <Registry deleteProduct={deleteProduct} dbProducts={dbProducts} theId={theId}/>,path:'/registry'}
   ]
   
  //Wrap all components inside Route
  const displayComp = components.map(comp=> <Route key={comp.name} path={comp.path} element={comp.name} />)

  //What to display when a user is loged in
  const displayLogedIn = (<>
      <Container maxWidth="xxl" className='allcomp'>
      <Routes>
        {displayComp}
      </Routes>
      </Container>
      <Footer/>
  </>)

  //What to display when NO user is loged in
  const displayNotLogedIn = (<>
    <Container maxWidth="xxl" className='allcomp'>
    <IntroPage postUsers={postUsers} setUser={setUser} dbUser={dbUser}/>
    </Container>
    <Footer/>
  </>)

  return (
    <>
      <NavBar user={user}/>
      {user?displayLogedIn:displayNotLogedIn}
    </>
  );
}

export default App;
