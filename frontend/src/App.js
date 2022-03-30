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
import { Navigate } from 'react-router-dom';
import './App.css'
import { Container, Switch } from '@mui/material';


const components = [
 { name: <Home />, path:'/home'},
 { name: <NewItemForm/>, path:'/newitemform'},
 { name: <IntroPage/>, path:'/intropage'},
 { name: <EditUserForm/>, path:'edituserform'},
 { name: <About/>,path:'/about'},
 { name: <Registry/>,path:'/registry'}
]

const displayComp = components.map(comp=> <Route key={comp.name} path={comp.path} element={comp.name} />)

const usersUrl = 'http://localhost:3000/users'
const productsUrl = 'http://localhost:3000/products'

function App() {

  const [user, setUser] = useState("")

  const getData = (url) => {
    fetch(url)
    .then( res => res.json())
    .then( data => console.log(data))
    .catch( error => console.log(error.message));
  }

  useEffect( () => {
  getData(usersUrl)
  getData(productsUrl)
  },[])

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
    <Routes>
    <Route path='/intropage' element={<IntroPage/>}/>
    </Routes>
    <Navigate to='/intropage'/>
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
