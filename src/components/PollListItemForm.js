import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import { handleAnswerSave } from "../actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PollListItemForm extends Component {
  state = {
    question: {},
    selectedOption: ''
  };

  componentDidMount() {
    const { question } = this.props;
    this.setState({
      question
    })
  }

  handleRadioButtonSelectionChange = (event) => {
    console.log(event.target.value);
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
      .then(this.props.history.push(`/poll/results/${question.id}`))
  }

  render() {
    const { question } = this.props;
    console.log("This is what I am receiving", this.props)
    return (
      <form className='form-group' onSubmit={this.handleFormSubmit}>
        <Card bg="light" className="text-center">
          <Card.Header>
            <h5>{question.author} asks</h5>
          </Card.Header>
          <Card.Body>
            <h3>Would you Rather ...</h3>

            <div className='Radio'>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="optionOne"
                  checked={this.state.selectedOption === 'optionOne'}
                  onChange={this.handleRadioButtonSelectionChange}/>
                {question.optionOne.text}
              </label>
            </div>

            <div className='Radio'>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value="optionTwo"
                  checked={this.state.selectedOption === 'optionTwo'}
                  onChange={this.handleRadioButtonSelectionChange}/>
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
  return {
    authedUser,
    question: filteredQuestion
  }
}


export default withRouter(connect(mapStateToProps)(PollListItemForm));
