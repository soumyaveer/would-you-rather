import React, { Component } from 'react';
import QuestionsList from "./QuestionsList";
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    questions: [],
    user: {
      answeredQuestions: [],
      unansweredQuestions: []
    }
  };

  filterAnsweredQuestions = (questions) => {
    const user = this.filterCurrentUserData()
    let answeredQuestions = []
    for (const answerId in user.answers) {
      questions.map(question =>
        answerId === question.id && answeredQuestions.push(question)
      )
    }

    console.log(answeredQuestions)
    return answeredQuestions
  }

  filterUnansweredQuestions = (questions) => {
    const user = this.filterCurrentUserData()
    console.log(user.answers)
    let unAnsweredQuestions = [];

    for (const answerId in user.answers) {
      questions.map(question =>
        answerId !== question.id && unAnsweredQuestions.push(question)
      )
    }
    console.log("These questions are not answered", unAnsweredQuestions)
    return unAnsweredQuestions;
  }

  filterCurrentUserData = () => {
    const { users, authedUser } = this.props
    const userDetails = users.filter(user =>
      user.id === authedUser
    )
    console.log("Filetring users details", userDetails)
    return userDetails[0]
  }

  updateState = (questions) => {
    let answeredQuestions = this.filterAnsweredQuestions(questions)
    let unansweredQuestions = this.filterUnansweredQuestions(questions)
    console.log("Answered", answeredQuestions)
    console.log("UnAnswered", unansweredQuestions)
    this.setState({
      questions: questions,
      user: {
        answeredQuestions: answeredQuestions,
        unansweredQuestions: unansweredQuestions
      }
    }, () => {
      console.log("what is the state here", this.state)
    })
  }

  handleOnPollSelect = (value) => {
    console.log("Inside Home", value)
    this.props.onPollSelect(value)
  }

  componentDidMount() {
    this.updateState(this.props.questions)
  }

  render() {
    console.log("Props to home", this.props)
    const { unansweredQuestions, answeredQuestions } = this.state.user
    return (
      <QuestionsList
        className='well text-center'
        questions={this.props.questions}
        unansweredQuestions={unansweredQuestions}
        answeredQuestions={answeredQuestions}
        currentUser={this.props.authedUser}
        onPollSelect={this.handleOnPollSelect}
      />
    )
  }
}

const mapStateToProps = ({ questions, authedUser, users }) => {
  return {
    authedUser,
    users: Object.values(users),
    questions: Object.values(questions)
  }
}

export default connect(mapStateToProps)(Home);