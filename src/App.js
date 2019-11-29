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
    const {question } = this.state;
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
                      <Route exact path='/' component={() => <LogIn />}/>
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
                               component={() => <PollResults question={question}/>}/>
                        <Route exact path='/create_question'
                               component={() => <NewQuestionForm />}/>
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
