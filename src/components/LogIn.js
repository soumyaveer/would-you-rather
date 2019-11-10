import React, { Component } from 'react'
import { Button, Card, Dropdown } from "react-bootstrap";

class LogIn extends Component {
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
              <Dropdown.Toggle variant="light" id="dropdown-basic" style={{border: 'gray'}}>
                Select User
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Soumya</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Sam</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Akshay</Dropdown.Item>
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