import React, { Component } from 'react'
import { Card, Dropdown } from "react-bootstrap";
import { getUsers } from "../store/DATA";
import { Link } from "react-router-dom";

class LogIn extends Component {
  state = {
    currentUser: {
      name: 'Select User',
      id: ''
    },
    users: []
  };

  updateUsersState = (users) => {
    this.setState({
      users: users
    })
  }

  updateCurrentUserState = (currentUser) => {
    this.setState({
      currentUser
    })
  }

  filterUsers = (response) => {
    let users = [];
    for (const user in response) {
      users.push(response[user])
    }
    return users
  }

  handleOnClick = (event) => {
    event.preventDefault();
    const currentUser = {
      name: event.target.textContent,
      id: event.target.id
    };
    this.updateCurrentUserState(currentUser)
  };

  componentDidMount() {
    getUsers()
      .then(response => this.filterUsers(response))
      .then(users => this.updateUsersState(users))
  }

  render() {
    const {currentUser, users} = this.state
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

          <Link to={`${currentUser.id}/dashboard`} className='btn btn-info'>Submit</Link>

        </Card.Body>
      </Card>
    )
  }
}

export default LogIn;