import React, { Component } from 'react';
import { Card, Button, Image } from "react-bootstrap";
import { handleAnswerSave } from "../actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PollListItemForm extends Component {
  state = {
    selectedOption: ''
  };

  handleRadioButtonSelectionChange = (event) => {
    const selectedOption = event.target.value;
    this.setState({
      selectedOption
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { dispatch, question, authedUser } = this.props;
    dispatch(handleAnswerSave({
      qid: question.id,
      answer: this.state.selectedOption,
      authedUser
    }))
      .then(() => this.props.history.push(`/poll/results/${question.id}`))
  }

  render() {
    const { question, author } = this.props;
    return (
      <form className='form-group' onSubmit={this.handleFormSubmit}>
        <Card bg="light" className="text-center">
          <Card.Header>
            <h5>{author.name} asks</h5>
            <Image src={author.avatarURL} roundedCircle/>
          </Card.Header>
          <Card.Body>
            <h3>Would you Rather ...</h3>

            <div className='Radio'>
              <input
                className='mr-1'
                type="radio"
                name="answer"
                value="optionOne"
                checked={this.state.selectedOption === 'optionOne'}
                onChange={this.handleRadioButtonSelectionChange}/>

              <label className='m-1'>
                {question.optionOne.text}
              </label>
            </div>

            <div className='Radio'>
              <input
                className='mr-1'
                type="radio"
                name="answer"
                value="optionTwo"
                checked={this.state.selectedOption === 'optionTwo'}
                onChange={this.handleRadioButtonSelectionChange}/>

              <label className='m-1'>
                {question.optionTwo.text}
              </label>
            </div>

            <Button variant='outline-info' type='submit'>
              Submit
            </Button>
          </Card.Body>
        </Card>
      </form>
    )
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { question }) => {
  const filteredQuestion = questions[question.id]
  const author = users[question.author]
  return {
    authedUser,
    question: filteredQuestion,
    author
  }
}

export default withRouter(connect(mapStateToProps)(PollListItemForm));
