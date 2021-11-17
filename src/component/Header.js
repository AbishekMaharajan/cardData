import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="position-sticky">
        <Container>
          <Navbar.Brand href="#home">Myproject</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
