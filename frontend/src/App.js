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
import NotFound from "./notfoundpage/NotFound";
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import { Container } from '@mui/material';
import { useNavigate } from "react-router-dom";





const usersUrl = 'https://strawberry-pudding-85231.herokuapp.com/users'
const productsUrl = 'https://strawberry-pudding-85231.herokuapp.com/products'

function App() {
  let navigate = useNavigate();

  const [user, setUser] = useState("")

  const [dbUser,setDbUser] = useState([])

  const [dbProducts, setDbProducts] = useState([])

  const [search,setSearch] = useState("")

  const [editUser, setEditUser]= useState("")

  //create new user
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
    .then(navigate('/'))
    .catch( error => console.log(error.message));
   }
  

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
    .then( data => setDbProducts([...dbProducts,data]))
    .catch( error => console.log(error.message));
  }

  //Filter through products
  const filteredProducts = dbProducts.filter(prod => prod.title.toLowerCase().includes(search.toLowerCase()))


  //Delete product from the database
  const deleteProduct = (deleteItem) => {
    fetch(`${productsUrl}/${deleteItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(setDbProducts(dbProducts.filter(product => product.id !== deleteItem.id)))
  }

   //Delete user from the database
   const deleteUser = (deleteItem) => {
    fetch(`${usersUrl}/${theId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => response.json())
    .then(alert('user deleted'))
    .then(setUser(''))
    .then(navigate(`/`))
  }

  //Patch new user name
  const editUserName = () => {
    fetch(`${usersUrl}/${theId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
          name:editUser
        })
    })
    .then (res => res.json())
    .then (setUser(editUser));
  }

//Sort items  
  const sortItems = (value) => {
    if(value==='lotohi'){
    const sortedProductsLowToHigh = [...dbProducts].sort(function(a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
  })
  setDbProducts(sortedProductsLowToHigh)
    }else{
  const sortedProductsHighToLow = [...dbProducts].sort(function(a, b) {
    return parseFloat(b.price) - parseFloat(a.price);
  })
  setDbProducts(sortedProductsHighToLow)
  }
}

  //Store components in a form of objects
  const components = [
    { name: <Home />, path:"/home"},
    { name: <NewItemForm theId={theId} dbProducts={dbProducts} setDbProducts={setDbProducts} postProduct={postProduct}/>, path:'/newitemform'},
    { name: <IntroPage postUsers={postUsers} setUser={setUser} dbUser={dbUser}/>, path:'/intropage'},
    { name: <EditUserForm users={users} setEditUser={setEditUser} editUserName={editUserName} editUser={editUser} deleteUser={deleteUser}/>, path:'/edituserform'},
    { name: <About/>,path:'/about'},
    { name: <Registry sortItems={sortItems} deleteProduct={deleteProduct} dbProducts={filteredProducts} theId={theId} setSearch={setSearch}/>,path:'/registry'},
    { name: <NotFound/>,path:'*'},
   ]
   
  //Wrap all components inside Route
  const displayComp = components.map(comp=> <Route key={comp.name} exact path={comp.path} element={comp.name} />)

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
    <Routes>
    <Route path='*' element={<NotFound />} />
    <Route index element={<IntroPage postUsers={postUsers} setUser={setUser} dbUser={dbUser}/>}/>
    </Routes>
    </Container>
    <Footer/>
  </>)

  return (
    <>
      <NavBar user={user} setUser={setUser}/>
      {user?displayLogedIn:displayNotLogedIn}
    </>
  );
}

export default App;
