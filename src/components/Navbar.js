import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import './Navbar.scss';
import logo from '../img/logo.png'

const Navigation = () => {
  const navigate = useNavigate()
  const handleCreateAcc = () => {
    navigate("/Login")
    console.log ("clicou")
  }

return(
  <Navbar className='navbar__color' expand='lg'>
    <Container >
      <Navbar.Brand href="#home">
        <img
          src={logo}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='navbar__nav'>
      <Nav className='w-100 justify-content-around text-uppercase align-items-center nav'>
        <a className='nav__text ' href="#home">Home</a>
        <a className='nav__text' href="#link">Services</a>
        <a className='nav__text' href="#home">About</a>
        <a className='nav__text' href="#link">Contact</a>
        <Button 
          className="text-uppercase btn"
          onClick={handleCreateAcc}
        >
          
            Sign in</Button>
          
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


)
};

export default Navigation;