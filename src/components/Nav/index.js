import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Nav() {
 
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" b="light" variant="light">
      <Container>
      <Navbar.Brand href="/About">Anh Vuong</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/project">Project</Nav.Link>
        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
};

  
 export default Nav;
