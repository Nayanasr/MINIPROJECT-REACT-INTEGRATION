import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#brand">Brand</Nav.Link>
              <Nav.Link href="#gender">Gender</Nav.Link>
              <Nav.Link href="#goal">Goal</Nav.Link>
              <Nav.Link href="#bestsellers">Bestsellers</Nav.Link>
              <Nav.Link href="#deals">Deals</Nav.Link>
              <Nav.Link href="#giftcard">Gift Card</Nav.Link>
              <Nav.Link href="#blogvideos">Blog Videos & More</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
