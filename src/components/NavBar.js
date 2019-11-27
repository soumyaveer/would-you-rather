import React, { Component } from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import { withRouter, Redirect } from 'react-router-dom';

class NavBar extends Component {
  state = {
    currentUser: {},
    userLoggedIn: false
  };

  handleLogoutClick = () => {
    this.setState(
      {
        currentUser: {},
        userLoggedIn: false
      },
      () => {
        this.props.onLogoutButtonClick(this.state);
        this.props.history.push('/')
      })
  };

  updateState = (newState) => {
    const { currentUser, userLoggedIn } = newState
    this.setState({
      currentUser,
      userLoggedIn,
    }, () => console.log("This is the state of the navbar", this.state))
  };

  componentDidMount() {
    const { currentUser, userLoggedIn } = this.props
    this.setState({
      currentUser,
      userLoggedIn,
    }, () => console.log("This is the state of the navbar", this.state))
  }

  render() {
    const { currentUser, userLoggedIn } = this.props;
    console.log("Is user logged in?", this.props.userLoggedIn);

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-sm-auto">
            {
              userLoggedIn
                ? <Nav.Link href={`/home`}> Home </Nav.Link>
                : <Nav.Link href="/"> Home </Nav.Link>
            }
            {
              userLoggedIn
                ? <Nav.Link href={`/create_question`}>New Question</Nav.Link>
                : <Nav.Link href='/'>New Question</Nav.Link>
            }
            {
              userLoggedIn
                ? <Nav.Link href="/leaderboard">LeaderBoard</Nav.Link>
                : <Nav.Link href="/">LeaderBoard</Nav.Link>
            }
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

export default withRouter(NavBar);

// If window.current_user is true , user is logged in. -> Allow redirect to NewQuestions and LeaderBorad
// Otherwise redirect to Sign up page.