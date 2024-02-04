import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
// import DriveEtaIcon from '@mui/icons-material/DriveEta';
import logo from'../Assests/logo.png'
export default function NavBar() {
  return (
    <div className='row'>
    <Navbar bg="dark" data-bs-theme="dark" className='fluid' sticky='top' >
    <Container >
      <Navbar.Brand href="/"  >
      <img src={logo} alt=''/>
      </Navbar.Brand>
      <Nav className="me-auto" >
        <Nav.Link to="/" as={Link} >Daily</Nav.Link>
        
        <Nav.Link to="/rental" as={Link} >Rental</Nav.Link>

        <Nav.Link to="/outstation" as={Link} >Outstation</Nav.Link>

        <Nav.Link to="/ongoing" as={Link} >Ongoing Ride</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>

    </div>
  )
}
