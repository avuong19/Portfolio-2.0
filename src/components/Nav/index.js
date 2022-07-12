import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Navigation() {
 
  return (
    <Navbar className="navbar mainText " bg="warning" collapseOnSelect expand="lg"  >
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

  
 export default Navigation;
