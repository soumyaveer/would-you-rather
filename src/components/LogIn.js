import React, { Component } from 'react'
import { Button, Card, Dropdown } from "react-bootstrap";
import {getUsers} from "../store/DATA"

class LogIn extends Component {
  state = {
    users: []
  }

  updateState = (response) => {
    this.setState({
      users: [
        ...this.state.users,
        response
      ]
    }, () => {

      this.state.users.map((user) => {
        console.log(user)
      })
    })
  }


  componentDidMount() {
    getUsers()
      .then(resp => this.updateState(resp))
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
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{border: 'solid lightgray'}}>
                Select User
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {
                  <Dropdown.Item href="#/action-1">Soumya</Dropdown.Item>
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