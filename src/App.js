import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getUsers } from "./store/DATA";
import PollListForm from "./components/PollListForm";

class App extends Component {
  state = {
    currentUser: {
      name: '',
      id: ''
    },
    users: [],
    userLoggedIn: false,
    selectedPoll: {}
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

  handleOnPollSelect = (question) => {
    console.log("Inside App", question)
    this.setState({
      selectedPoll: Object.assign(this.state.selectedPoll, question, {})
    }, () => console.log(this.state))
  }

  render() {
    const { userLoggedIn, users, currentUser } = this.state;
    console.log(userLoggedIn)
    return (
      <div>
        <NavBar currentUser={currentUser} userLoggedIn={userLoggedIn}/>
        <BrowserRouter className="App">
          <Switch>
            <Route exact path='/' component={() => <LogIn onLogIn={this.handleLogIn} users={users}/>}/>
            <Route exact path={`/${currentUser.id}/dashboard`}
                   component={() => <Home currentUser={currentUser} users={users} onPollSelect={this.handleOnPollSelect}/>}/>
            <Route exact path={`/polls/8xf0y6ziyjabvozdd253nd`} component={() => <PollListForm question={this.state.selectedPoll}/>}/>

          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
