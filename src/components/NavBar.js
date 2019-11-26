import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import LogIn from "./LogIn";

class NavBar extends Component {
  state = {
    currentUser: this.props.currentUser,
    userLoggedIn: this.props.userLoggedIn
  };

  handleLogoutClick = (event) => {
    console.log(event.target);
    event.preventDefault();

  };

  updateState = () => {
    this.setState({
      currentUser: '',
      userLoggedIn: false
    })
  }

  handleOnClick = () => {
    if (!this.state.userLoggedIn) {
      this.props.history.push('/')
    }
  }

  componentDidMount() {
    this.updateState();
  }

  render() {
    const { currentUser, userLoggedIn } = this.props;
    const isLoggedIn = !!window.current_user;
    console.log("Is user logged in?", isLoggedIn);

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-sm-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href={`/${currentUser.id}/create_question`}>New Question</Nav.Link>
            <Nav.Link href="/leaderboard">LeaderBoard</Nav.Link>
            {
              userLoggedIn && <Nav.Link inactive='true'>Hello, {currentUser.name}</Nav.Link>
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