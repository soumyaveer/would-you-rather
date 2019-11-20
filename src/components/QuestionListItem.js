import React, {Component} from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


class QuestionListItem extends Component {

  handleOnClick = (event) => {
    console.log("Event", event.target);
    console.log("Event", event.target.id);
    this.props.onPollSelect(event.target.id)
  }

  render(){
    const {question} = this.props;
    console.log("Question", question)
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
              to={`/polls/${question.id}`}
              className='btn btn-outline-info'
              id={question.id}
              onClick={this.handleOnClick}
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