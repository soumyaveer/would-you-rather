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
import QuestionNotFound from "./components/QuestionNotFound";

class App extends Component {
  state = {
    question: {}
  };

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  handleOnPollSelect = (question) => {
    this.setState({
      question: question
    })
  };

  render() {
    const { question } = this.state;
    return (
      <BrowserRouter className="App">
        <Fragment>
          <LoadingBar/>
          <div className='container' style={{ marginTop: 20 }}>
            {
              this.props.loading === true
                ? <div>
                  <NavBar />
                  <Route render={() => (<LogIn />)}/>
                </div>
                : <div>
                  <NavBar/>
                  <Switch>
                    <Route exact path='/' component={() => <LogIn/>}/>
                    <Route path='/home' component={() => <Home onPollSelect={this.handleOnPollSelect}/>}/>
                    <Route path={`/questions/${question.id}`}
                           component={() => <PollListItemForm question={question}/>}/>
                    <Route path='/leaderboard' component={() => <LeaderBoard/>}/>
                    <Route path={`/poll/results/${question.id}`}
                           component={() => <PollResults question={question}/>}/>
                    <Route path='/add'
                           component={() => <NewQuestionForm/>}/>
                    <Route path='/bad' component={() => <QuestionNotFound/>} />
                  </Switch>
                </div>
            }
          </div>
        </Fragment>
      </BrowserRouter>
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
