import React from 'react';
import './Header.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="logo">
            <img src="./images/logo.jpg" alt="logo"></img>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Home
              </button>
            </Nav.Link>

            {/* <NavDropdown title="Shop" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Electronics</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Clothes</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Furnitures</NavDropdown.Item>
          <NavDropdown.Item href="#action6">Books</NavDropdown.Item>
          <NavDropdown.Item href="#action7">Food</NavDropdown.Item>
          <NavDropdown.Item href="#action7">Toys</NavDropdown.Item>
        </NavDropdown> */}

            <Nav.Link href="/Login">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Login
              </button>
            </Nav.Link>

            <Nav.Link href="#action3">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Manage Profile
              </button>
            </Nav.Link>

            <Nav.Link href="/SellerMenu">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                View Seller Products
              </button>
            </Nav.Link>



            <Nav.Link href="#action4">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Cart
              </button>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
