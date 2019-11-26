import React, { Component } from 'react';
import { getQuestions } from "../store/DATA";
import QuestionsList from "./QuestionsList";

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
    const { users, currentUser } = this.props
    const userDetails = users.filter(user =>
      user.id === currentUser.id
    )
    console.log("Filetring users details", userDetails)
    return userDetails[0]
  }

  extractQuestions = (response) => {
    return  Object.values(response)

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
    getQuestions()
      .then(response => {
        console.log(response)
        return this.extractQuestions(response)
      })
      .then(questions => this.updateState(questions))
      .catch(err => console.log(err))
  }

  render() {
    console.log("Props to home", this.props)
    const {unansweredQuestions, answeredQuestions} = this.state.user
    return (
      <QuestionsList
        className='well text-center'
        questions={this.state.questions}
        unansweredQuestions={unansweredQuestions}
        answeredQuestions={answeredQuestions}
        currentUser={this.props.currentUser}
        onPollSelect={this.handleOnPollSelect}
      />
    )
  }
}

export default Home;