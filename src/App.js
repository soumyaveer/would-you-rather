import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PollListItemForm from "./components/PollListItemForm";
import LeaderBoard from "./components/LeaderBoard";
import PollResults from "./components/PollResults";
import NewQuestionForm from "./components/NewQuestionForm";
import { connect } from 'react-redux';
import { handleInitialData } from "./actions/shared";
import LoadingBar from 'react-redux-loading';

class App extends Component {
  state = {
    currentUser: {
      id: '',
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
    this.setState({
      currentUser: values,
      userLoggedIn: true
    })
  };

  setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
  };

  handleLogOut = (values) => {
    console.log("Logging out here")
    this.setState({
      currentUser: {
        id: '',
        name: '',
        avatarURL: '',
        answers: {}
      },
      userLoggedIn: false
    })
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
    this.props.dispatch(handleInitialData())
  }

  handleOnPollSelect = (question) => {
    console.log("Inside App", question)
    this.setState({
      question: question
    }, () => console.log("Question state", this.state))
  };

  render() {
    const { users, currentUser, question } = this.state;
    return (
      <div>
        <BrowserRouter className="App">
          <Fragment>
            <LoadingBar/>
            <div className='container' style={{marginTop: 20}}>
              {
                this.props.loading === true
                  ? (
                    <div>
                      <NavBar />
                      <Route exact path='/' component={() => <LogIn onLogIn={this.handleLogIn}/>}/>
                    </div>
                  )
                  : (
                    <div>
                      <NavBar />
                      <Switch>
                        <Route exact path='/' component={() => <LogIn />}/>

                        <Route exact path='/home' component={() => <Home onPollSelect={this.handleOnPollSelect}/>}/>
                        <Route exact path={`/polls/${question.id}`}
                               component={() => <PollListItemForm question={question}/>}/>
                        <Route exact path='/leaderboard' component={() => <LeaderBoard/>}/>
                        <Route exact path={`/poll/results/${question.id}`}
                               component={() => <PollResults question={question} currentUser={currentUser}
                                                             users={users}/>}/>
                        <Route exact path='/create_question'
                               component={() => <NewQuestionForm currentUser={currentUser}/>}/>
                      </Switch>
                    </div>
                  )
              }
            </div>
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  const currentUser = users[authedUser]
  return {
    loading: authedUser === null,
    currentUser,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
