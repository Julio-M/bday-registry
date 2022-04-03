import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './navbar.css'
import Container from '@mui/material/Container';
import { Outlet, Link,useNavigate } from "react-router-dom";
const settings = ['Account','Logout'];

const linkpaths = [
  {page:'Home',path:'/home'},
  {page:'My Registry',path:'/registry'},
  {page:'About', path:'/about'},
  {page:'New Item', path:'/newitemform'}
]

function Navbar ({user, setUser}) {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleFun =(e)=>{
    const p = e.target
    let value = p.textContent

    if(value==='Logout'){
      setUser(false)
      navigate("/")
    } else {
      navigate(`/edituserform`)
    }
  }


  const whenLogedIn = (<>
     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {linkpaths.map((link) => (
                <MenuItem key={link.page} onClick={handleCloseNavMenu}>
                <Link className='droplinks' to={`${link.path}`}><Typography textAlign="center">{link.page}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link className='droplinks' to='/'><Typography
          className='logoTitle'
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            GetList
          </Typography></Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {linkpaths.map((link) => (
              <Link className='links' to={`${link.path}`}><Button
                key={link.page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                 {link.page}
              </Button></Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <p id='usernav'>{`Hi, ${user}!`}</p>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography onClick={handleFun} name={setting} textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
  </>)

  const logedOut = (<>
    <Link to='/'><Button id="loginbtn">Log In</Button></Link>
  </>)

    return (
        <>
    <AppBar id='topbar' position="fixed">
    <Container maxWidth="xxl">
        <Toolbar disableGutters>
        <Link className='droplinks' to='/home'><Typography
          className='logoTitle'
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            GetList
          </Typography></Link>
          {user?whenLogedIn:logedOut}
        </Toolbar>
        </Container>
    </AppBar>
        </>
    );
}

export default Navbar;