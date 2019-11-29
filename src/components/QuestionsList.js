import React, { Component } from 'react';
import { Accordion, Card } from "react-bootstrap";
import QuestionListItem from "./QuestionListItem";

class QuestionsList extends Component {
  handlePollSelect = (value) => {
    const question = this.findQuestion(value);
    this.props.onPollSelect(question)
  };

  findQuestion = (searchQuestionId) => {
    return this.props.questions.filter(question => searchQuestionId === question.id)[0]
  };

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
                <h3>Your Unanswered Questions</h3>
                {
                  unansweredQuestions.map((question) => (
                      <QuestionListItem
                        key={question.id}
                        question={question}
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
                <h3>Your Answered Questions</h3>

                {
                  answeredQuestions.map((question) => (
                    <QuestionListItem
                      question={question}
                      key={question.id}
                      onPollSelect={this.handlePollSelect}
                      isQuestionAnswered={true}
                      currentUser={currentUser}
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