import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getUsers } from "./store/DATA";
import PollListItemForm from "./components/PollListItemForm";
import LeaderBoard from "./components/LeaderBoard";
import PollResults from "./components/PollResults";
import NewQuestionForm from "./components/NewQuestionForm";

class App extends Component {
  state = {
    currentUser: {
      id: undefined,
      name: '',
      avatarURL: '',
      answers: {}
    },
    users: [],
    userLoggedIn: false,
    question: {}
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

  handleLogOut = () => {
    console.log("Logging out here")
    this.updateCurrentUserState({
      currentUser: {
        id: undefined,
        name: '',
        avatarURL: '',
        answers: {}
      }
    }, () => this.props.history.push('/login'))
  }

  updateUsersState = (users) => {
    this.setState({
      users: users
    }, () => console.log(this.state.users))
  }

  filterUsers = (response) => {
    return Object.values(response)
  };

  componentDidMount() {
    getUsers()
      .then(response => this.filterUsers(response))
      .then(users => this.updateUsersState(users))
  }

  handleOnPollSelect = (question) => {
    console.log("Inside App", question)
    this.setState({
      question: question
    }, () => console.log("Question state", this.state))
  };

  render() {
    const { userLoggedIn, users, currentUser, question } = this.state;
    console.log(userLoggedIn)
    return (
      <div>
        <NavBar currentUser={currentUser} userLoggedIn={userLoggedIn} onLogoutButtonClick={this.handleLogOut}/>
        <BrowserRouter className="App">
          <Switch>
            <Route exact path='/' component={() => <LogIn onLogIn={this.handleLogIn} users={users}/>}/>
            <Route exact path={`/home`}
                   component={() => <Home currentUser={currentUser} users={users}
                                          onPollSelect={this.handleOnPollSelect}/>}/>
            <Route exact path={`/polls/${question.id}`} component={() => <PollListItemForm question={question}/>}/>
            <Route exact path='/leaderboard' component={() => <LeaderBoard/>}/>
            <Route exact path={`/poll/results/${question.id}`}
                   component={() => <PollResults question={question} currentUser={currentUser} users={users}/>}/>
            <Route exact path={'/create_question'} component={() => <NewQuestionForm currentUser={currentUser}/>}/>


          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
