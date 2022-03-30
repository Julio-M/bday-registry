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


  console.log('Users',dbUser,user)

  const [dbProducts, setDbProducts] = useState([])

  const getData = (set,url) => {
    fetch(url)
    .then( res => res.json())
    .then( data => set(data))
    .catch( error => console.log(error.message));
  }

  const users = dbUser.filter(data => data.name.includes(user))
  const theId = users.map(id=>id.id)

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

  useEffect( () => {
    patchData()
  },[user])


  useEffect( () => {
  getData(setDbUser,usersUrl)
  getData(setDbProducts,productsUrl)
  },[])


  const components = [
    { name: <Home />, path:'/home'},
    { name: <NewItemForm/>, path:'/newitemform'},
    { name: <IntroPage postUsers={postUsers} setUser={setUser} dbUser={dbUser} patchData={patchData}/>, path:'/intropage'},
    { name: <EditUserForm/>, path:'edituserform'},
    { name: <About/>,path:'/about'},
    { name: <Registry/>,path:'/registry'}
   ]
   
  const displayComp = components.map(comp=> <Route key={comp.name} path={comp.path} element={comp.name} />)

  const displayLogedIn = (<>
      <Container maxWidth="xxl" className='allcomp'>
      <Routes>
        {displayComp}
      </Routes>
      </Container>
      <Footer/>
  </>)

  const displayNotLogedIn = (<>
    <Container maxWidth="xxl" className='allcomp'>
    <IntroPage postUsers={postUsers} setUser={setUser} dbUser={dbUser} patchData={patchData}/>
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
