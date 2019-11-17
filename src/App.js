import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getUsers } from "./store/DATA";

class App extends Component {
  state = {
    currentUser: {
      name: '',
      id: ''
    },
    users: [],
    userLoggedIn: false
  };

  updateCurrentUserState = (newState) => {
    this.setState({
      currentUser: newState,
      userLoggedIn: !this.state.userLoggedIn
    })
  }

  handleLogIn = (values) => {
    console.log('Raising the state up', values)
    this.updateCurrentUserState(values)
  }

  updateUsersState = (users) => {
    this.setState({
      users: users
    }, () => console.log(this.state.users))
  }

  filterUsers = (response) => {
    let users = [];
    for (const user in response) {
      users.push(response[user])
    }
    return users
  };

  componentDidMount() {
    getUsers()
      .then(response => this.filterUsers(response))
      .then(users => this.updateUsersState(users))
  }


  render() {
    const {userLoggedIn, users, currentUser} = this.state;
    console.log(userLoggedIn)
    return (
      <div>
        <NavBar currentUser={currentUser} userLoggedIn={userLoggedIn}/>
        <BrowserRouter className="App">
          <Switch>
            <Route exact path='/' component={() => <LogIn onLogIn={this.handleLogIn} users={users}/>}/>
            <Route exact path={`${currentUser.id}/dashboard`} component={() => <Home />}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
