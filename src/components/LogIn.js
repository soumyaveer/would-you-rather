import React, { Component } from 'react'
import { Button, Card, Dropdown } from "react-bootstrap";
import { getUsers } from "../store/DATA"

class LogIn extends Component {
  state = {
    users: []
  };

  updateState = (users) => {
    this.setState({
      users: users
    }, () => {
      console.log(this.state)
    })
  }


  filterUsers = (response) => {
    let users = [];
    for (const user in response) {
      users.push(response[user])
    }

    return users
  }

  componentDidMount() {
    getUsers()
      .then(response => this.filterUsers(response))
      .then(users => this.updateState(users))
  }

  render() {

    return (
      <Card bg="light">
        <Card.Header>
          <h3>Welcome to the Would You Rather App!</h3>
          <p>Please Sign in to continue</p>
        </Card.Header>
        <Card.Body>
          <Card.Title>Sign In</Card.Title>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ border: 'solid lightgray' }}>
              Select User
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                this.state.users.map(user =>
                  <Dropdown.Item key={user.id} href={`${user.id}/dashboard`}>{user.name}</Dropdown.Item>
                )
              }
            </Dropdown.Menu>
            <br/>
            <br/>
          </Dropdown>
          <Button variant='info'>Submit</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default LogIn;