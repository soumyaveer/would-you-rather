import React, {Component} from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


class QuestionListItem extends Component {

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
            <p>{question.optionOne.text}</p>
            OR
            <p>{question.optionTwo.text}</p>

            <Link
              to={`#`}
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

export default QuestionListItem;