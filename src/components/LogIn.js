import React, { Component } from 'react'
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class LogIn extends Component {
  state = {
    currentUser: {
      name: 'Select User',
      id: ''
    }
  };

  updateCurrentUserState = (currentUser) => {
    this.setState({
      currentUser
    })
  }

  handleOnClick = (event) => {
    event.preventDefault();
    const currentUser = {
      name: event.target.textContent,
      id: event.target.id
    };
    this.updateCurrentUserState(currentUser)
  };

  handleOnSubmitClick = () => {
    this.props.onLogIn(this.state.currentUser)
  };

  render() {
    const {currentUser} = this.state;
    const {users} = this.props;

    return (
      <Card bg="light" className="text-center">

        <Card.Header>
          <h3>Welcome to the Would You Rather App!</h3>
          <p>Please Sign in to continue</p>
        </Card.Header>

        <Card.Body>
          <Card.Title>Sign In</Card.Title>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ border: 'solid lightgray' }}>
              {currentUser.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {
                users.map(user =>
                  <Dropdown.Item
                    key={user.id}
                    value={user.name}
                    id={user.id}
                    onClick={this.handleOnClick}>
                    {user.name}
                  </Dropdown.Item>
                )
              }
            </Dropdown.Menu>

            <br/>
            <br/>
          </Dropdown>

          <Link
            to={`${currentUser.id}/dashboard`}
            className='btn btn-info'
            onClick={this.handleOnSubmitClick}
          >
            Submit
          </Link>

        </Card.Body>
      </Card>
    )
  }
}

export default LogIn;