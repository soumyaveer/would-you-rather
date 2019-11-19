import React, { Component } from 'react';
import { Accordion, Card } from "react-bootstrap";

class QuestionsList extends Component {

  render() {
    const { unansweredQuestions, answeredQuestions } = this.props
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
                    <Card bg="light" className="text-center" key={id}>
                      <Card.Header>
                        <h3>{question.author} asks</h3>
                      </Card.Header>

                      <Card.Body>
                        <h3>Would you rather...</h3>
                        {question.optionOne.text}
                        <br/>
                        OR
                        <br/>
                        {question.optionTwo.text}
                      </Card.Body>
                    </Card>
                  ))
                }
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {
                  answeredQuestions.map((question, id) => (
                    <Card bg="light" className="text-center" key={id}>
                      <Card.Header>
                        <h3>{question.author} asks</h3>
                      </Card.Header>

                      <Card.Body>
                        <h3>Would you rather...</h3>
                        {question.optionOne.text}
                        <br/>
                        OR
                        <br/>
                        {question.optionTwo.text}
                      </Card.Body>
                    </Card>
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