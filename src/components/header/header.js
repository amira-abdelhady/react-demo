import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
function Header() {
  let c=useSelector((state)=>state.count)
  let cart=useSelector((state)=>state.cartLength.cart)
  console.log(cart,"cccc");
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} className="nav-link" to="/">my demo
          </Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/products">products
          </Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/books">books
          </Nav.Link>
          <Nav.Link as={Link} className="nav-link text-success" to="/count">counter {c}
          </Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link as={Link} className="nav-link text-success" to="/cart">cart {cart}
          </Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/todo">todo
          </Nav.Link>
          <Nav.Link as={Link} className="nav-link"  to="/login">login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
