import React, { Component } from 'react';
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class QuestionListItem extends Component {

  handleOnClick = (event) => {
    this.props.onPollSelect(event.target.id)
  };

  render() {
    const { question, author, isQuestionAnswered } = this.props;
    return (
      <div>
        <Card bg="light" className="text-center m-5">
          <Card.Header>
            <h3>{author.name} asks</h3>
            <Image src={author.avatarURL} roundedCircle/>
          </Card.Header>

          <Card.Body>
            <h3>Would you rather...</h3>
            <p>{question.optionOne.text}</p>
            OR
            <p>{question.optionTwo.text}</p>
            {
              isQuestionAnswered
                ? <Link to={`/poll/results/${question.id}`}
                        className='btn btn-outline-info'
                        id={question.id}
                        onClick={this.handleOnClick}>
                  View Poll
                </Link>
                :
                <Link to={`/questions/${question.id}`}
                      className='btn btn-outline-info'
                      id={question.id}
                      onClick={this.handleOnClick}>
                  View Poll
                </Link>
            }
          </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { question }) => {
  const filteredQuestion = questions[question.id];
  const authorId = filteredQuestion.author;
  const author = users[authorId];
  return {
    author: author,
    question: filteredQuestion
  }
};

export default connect(mapStateToProps)(QuestionListItem);