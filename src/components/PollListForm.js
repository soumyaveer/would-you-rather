import React, {Component} from 'react';
import { Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


class PollListForm extends Component {
  render(){
    const {question} = this.props;
    return(
      <div>
        <Card bg="light" className="text-center">
          <Card.Header>
            <h3>{question.author} asks</h3>
          </Card.Header>

          <Card.Body>
            <h3>Would you rather...</h3>
            <InputGroup className="mb-3">
              <InputGroup.Radio aria-label="Radio">
                {question.optionOne.text}
              </InputGroup.Radio>
            </InputGroup>

            OR

            <InputGroup className="mb-3">
              <InputGroup.Radio aria-label="Radio">
                {question.optionTwo.text}
              </InputGroup.Radio>
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