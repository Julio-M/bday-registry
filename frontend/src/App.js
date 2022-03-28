import './App.css';
import Home from './home/Home'
import IntroPage from './intropage/IntroPage'
import NewItemForm from './newitem/NewItemForm'
import NavBar from './navbar/Navbar'
import Footer from './footer/Footer'
import EditUserForm from './edituser/EditUserForm'
import About from './about/About'
import Registry from './registry/Registry'


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <IntroPage/>
    <Registry/>
    <NewItemForm/>
    <EditUserForm/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
