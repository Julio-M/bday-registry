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


const components = [
 { name: <Home />, path:'/home'},
 { name: <NewItemForm/>, path:'/newitemform'},
 { name: <IntroPage/>, path:'/intropage'},
 { name:<EditUserForm/>, path:'edituserform'},
 { name:<About/>,path:'/about'},
 { name:<Registry/>,path:'/registry'}
]

const displayComp = components.map(comp=> <Route key={comp.name} path={comp.path} element={comp.name} />)

function App() {
  return (
    <>
      <NavBar/>
      <Container maxWidth="xxl" className='allcomp'>
      <Routes>
        {displayComp}
      </Routes>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
