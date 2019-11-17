import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {

  render() {
    const { currentUser } = this.props;

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-sm-auto">
            <Nav.Link href={`${currentUser.id}/dashboard`}> Home </Nav.Link>
            <Nav.Link href="/create_question">New Question</Nav.Link>
            <Nav.Link href="/leaderboard">LeaderBoard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;

// If window.current_user is true , user is logged in. -> Allow redirect to NewQuestions and LeaderBorad
// Otherwise redirect to Sign up page.