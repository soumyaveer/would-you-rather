import React, { Component } from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import { withRouter, Link } from 'react-router-dom';

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
          <Nav className="nav-item mr-sm-auto">
            {
              userLoggedIn
                ? <Link className='nav-link' href={`/home`}> Home </Link>
                : <Link className='nav-link' href="/"> Home </Link>
            }
            {
              userLoggedIn
                ? <Link className='nav-link' href={`/create_question`} onClick={this.handleClick}>New Question</Link>
                : <Link className='nav-link' href='/'>New Question</Link>
            }
            {
              userLoggedIn
                ? <Link className='nav-link' href="/leaderboard">LeaderBoard</Link>
                : <Link className='nav-link' href="/">LeaderBoard</Link>
            }
            {
              userLoggedIn && <Link className='nav-link' inactive='true'>Hello, {currentUser.name}</Link>
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