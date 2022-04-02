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
            {/* <img src="./images/logo.jpg" alt="logo"></img>  */}
            <img src="https://cdn-icons-png.flaticon.com/512/2942/2942495.png" alt="logo"></img>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* HOME */}
            {localStorage.usertype == "Seller" ? 
            <Nav.Link href="/">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
              All Products
              </button>
            </Nav.Link>
            :
            <Nav.Link href="/">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Home
              </button>
            </Nav.Link>
            }

            {/* LOGIN */}
            <Nav.Link href="/Login">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Login
              </button>
            </Nav.Link>

            {/* ADMIN MENU: ONLY ADMIN */}
            {localStorage.usertype == "Admin" ? 

            <Nav.Link href="/AdminMenu">

              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Manage Profile
              </button>
            </Nav.Link>
            : null
            }
            
            {/* SELLER MENU: ONLY SELLER */}
            {localStorage.usertype == "Seller" ? 
            <Nav.Link href="/SellerMenu">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                My Products
              </button>
            </Nav.Link>
            : null
            }

            {/* CART: ONLY CUSTOMMER */}
            {localStorage.usertype == "Customer" ? 
            <Nav.Link href="/Cart">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Cart
              </button>
            </Nav.Link>
            : null
            }

            {/* MANAGEUSERPROFILE: ONLY CUSTOMMER AND SELLER */}
            {localStorage.usertype == "Customer" || localStorage.usertype == "Seller"? 
            <Nav.Link href="/ManageUserProfile">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Manage My Profile
              </button>
            </Nav.Link>
            : null
            }

            {/* HISTORY: ONLY CUSTOMMER */}
            {localStorage.usertype == "Customer" ? 
            <Nav.Link href="/History">
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Order History
              </button>
            </Nav.Link>
            : null
            }

            {/* LOGGED IN USER  */}
          </Nav>
          <Form className="d-flex">
            <h1 class = "welcomeMessage" >{localStorage.usertype == "Not Logged In"? "You are not logged in": localStorage.usertype + " : " + localStorage.username }
            </h1>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
