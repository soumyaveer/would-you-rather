import React, { Component } from 'react';
import { Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class PollListForm extends Component {
  render() {
    const { question } = this.props;
    console.log("This is what I am receiving", question)
    return (
      <div>
        <Card bg="light" className="text-center">
          <Card.Header>
            <h3>{question.author} asks</h3>
          </Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label="Radio"/>
              </InputGroup.Prepend>
              {question.optionOne.text}
              OR
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label="Radio" />
              </InputGroup.Prepend>
              {question.optionTwo.text}
            </InputGroup>

            <Link
              to={`/polls/${question.id}`}
              className='btn btn-outline-info'
            >
              View Poll
            </Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default PollListForm;