
import React from "react";
import "./Header.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function Header() {  
  return (
    
    <Navbar bg="danger" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">
   
    Taiga
      
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Shop" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Electronics</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Clothes</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Furnitures</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Books</NavDropdown.Item>
          <NavDropdown.Item href="#action7">Food</NavDropdown.Item>
          <NavDropdown.Item href="#action7">Toys</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/Login">Login</Nav.Link>
        
        <Nav.Link href="#action3">
          Manage Profile
        </Nav.Link>
        <Nav.Link href="#action4">
          Cart
        </Nav.Link>
        
      </Nav>
      
      
      
      </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Header;