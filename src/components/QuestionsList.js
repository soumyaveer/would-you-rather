import React, { Component } from 'react';
import { Accordion, Card } from "react-bootstrap";
import QuestionListItem from "./QuestionListItem";

class QuestionsList extends Component {
  handlePollSelect = (value) => {
    const question = this.findQuestion(value);
    console.log(question)
    this.props.onPollSelect(question)
  }

  findQuestion = (searchQuestionId) => {
    console.log(this.props.questions);
    return this.props.questions.filter(question => searchQuestionId === question.id)[0]
  }

  render() {
    const { unansweredQuestions, answeredQuestions, currentUser } = this.props
    return (
      <div className='text-center'>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Unanswered Questions
            </Accordion.Toggle>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Answered Questions
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {
                  unansweredQuestions.map((question, id) => (
                    <QuestionListItem
                      question={question}
                      key={id}
                      onPollSelect={this.handlePollSelect}
                      isQuestionAnswered={false}
                      currentUser={currentUser}
                    />
                  ))
                }
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {
                  answeredQuestions.map((question, id) => (
                    <QuestionListItem
                      question={question}
                      key={id}
                      onPollSelect={this.handlePollSelect}
                      isQuestionAnswered={true}
                      currentUser={this.props.currentUser}
                    />
                  ))
                }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default QuestionsList;