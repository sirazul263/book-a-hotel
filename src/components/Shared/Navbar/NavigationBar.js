import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Book a Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto fw-bold"
            style={{ fontSize: "13px", color: "blue" }}
          >
            <Link to="/" className="mx-3 text-brand text-decoration-none">
              Home
            </Link>
            <Link to="/hotels" className="mx-3 text-brand text-decoration-none">
              Hotels
            </Link>
            <Link to="/about" className="mx-3 text-brand text-decoration-none">
              About
            </Link>
            <Link to="/login" className="mx-3 text-brand text-decoration-none">
              Login
            </Link>
            <Link to="/search">
              <FontAwesomeIcon
                icon={faSearch}
                className="search-icon text-brand"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
