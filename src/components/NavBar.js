import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import {Button} from "react-bootstrap";

class NavBar extends Component {
  handleLogoutClick = () => {

  }

  render() {
    const { currentUser, userLoggedIn } = this.props;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-sm-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/create_question">New Question</Nav.Link>
            <Nav.Link href="/leaderboard">LeaderBoard</Nav.Link>
            {
              userLoggedIn && <Nav.Link inactive='true' >Hello, {currentUser.name}</Nav.Link>
            }
            {
              userLoggedIn && <Button variant="light" onClick={this.handleLogoutClick}>Log Out</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;

// If window.current_user is true , user is logged in. -> Allow redirect to NewQuestions and LeaderBorad
// Otherwise redirect to Sign up page.