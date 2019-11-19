import React, {Component} from 'react';
import { Card } from "react-bootstrap";

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
            {question.optionOne.text}
            <br/>
            OR
            <br/>
            {question.optionTwo.text}
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default QuestionListItem;