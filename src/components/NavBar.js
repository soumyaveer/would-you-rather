import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">New Question</Nav.Link>
            <Nav.Link href="#link">LeaderBoard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;