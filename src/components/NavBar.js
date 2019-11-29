import React, { Component } from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  // state = {
  //   currentUser: {},
  //   userLoggedIn: false
  // };

  handleLogoutClick = () => {
    this.props.onLogoutButtonClick(this.state);
    this.props.history.push('/')
  };

  // updateState = () => {
  //   const { currentUser, userLoggedIn } = this.props
  //   this.setState({
  //     currentUser,
  //     userLoggedIn,
  //   }, () => console.log("This is the state of the navbar", this.state))
  // };
  //
  // componentDidMount() {
  //   const { currentUser, authedUser } = this.props
  //   this.setState({
  //     currentUser: authedUser,
  //   }, () => console.log("This is the state of the navbar", this.state))
  // }

  render() {
    const { authedUser, currentUser } = this.props;
    console.log("Is user logged in?", authedUser, currentUser.name);

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-item mr-sm-auto">
            {
              authedUser
                ? <Link className='nav-link' to='/home'> Home </Link>
                : <Link className='nav-link' to='/'> Home </Link>
            }
            {
              authedUser
                ? <Link className='nav-link' to='/create_question' onClick={this.handleClick}>New Question</Link>
                : <Link className='nav-link' to='/'>New Question</Link>
            }
            {
              currentUser
                ? <Link className='nav-link' to="/leaderboard">LeaderBoard</Link>
                : <Link className='nav-link' to="/">LeaderBoard</Link>
            }
            {
              authedUser && <Link className='nav-link' inactive='true'>Hello, {currentUser.name}</Link>
            }
            {
              authedUser && <Button variant="light" onClick={this.handleLogoutClick}>Log Out</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = ({users,  authedUser}) => {
  const currentUser = users[authedUser];
  return {
    authedUser,
    currentUser
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));