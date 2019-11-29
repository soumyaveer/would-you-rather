import React, { Component } from 'react'
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setAuthedUser } from "../actions";

class LogIn extends Component {
  state = {
    currentUser: {
      id: '',
      name: 'Select User',
      avatarURL: '',
      answers: {}
    }
  };

  updateCurrentUserState = (currentUser) => {
    this.setState({
      currentUser
    })
  };

  handleOnClick = (event) => {
    event.preventDefault();
    const userId = event.target.id;
    const currentUser = this.findUserById(userId);
    this.updateCurrentUserState(currentUser)
  };

  findUserById = userId => {
    const { users } = this.props;
    return users.filter(user => user.id === userId)[0]
  }

  handleOnSubmitClick = () => {
    const { dispatch } = this.props;
    const { currentUser } = this.state;
    dispatch(setAuthedUser(currentUser.id))
  };

  render() {
    const { users } = this.props;
    const { currentUser } = this.state;
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
            to={`/home`}
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

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(LogIn);