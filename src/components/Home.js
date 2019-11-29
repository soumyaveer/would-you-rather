import React, { Component } from 'react';
import QuestionsList from "./QuestionsList";
import { connect } from 'react-redux';

class Home extends Component {
  handleOnPollSelect = (value) => {
    this.props.onPollSelect(value)
  }

  render() {
    const { unansweredQuestions, answeredQuestions, questions, authedUser } = this.props
    return (
      <QuestionsList
        className='well text-center'
        questions={questions}
        unansweredQuestions={unansweredQuestions}
        answeredQuestions={answeredQuestions}
        currentUser={authedUser}
        onPollSelect={this.handleOnPollSelect}
      />
    )
  }
}


const mapStateToProps = ({ questions, authedUser, users }) => {
  const questionsArray = Object.values(questions);
  const answeredQuestions = questionsArray.filter(question =>
    question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
  );

  const unansweredQuestions = questionsArray.filter(question =>
    !(question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
  );

  return {
    authedUser,
    users: Object.values(users),
    questions: questionsArray,
    answeredQuestions,
    unansweredQuestions
  }
}

export default connect(mapStateToProps)(Home);