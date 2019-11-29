import React, { Component } from 'react';
import { Button, Card } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddQuestion } from "../actions";

class NewQuestionForm extends Component {
  state = {
    newQuestion: {
      author: '',
      optionOneText: '',
      optionTwoText: ''
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Values for new question", event.target)
    const question = this.state.newQuestion;
    const {dispatch} = this.props;
    dispatch(handleAddQuestion(question))
      .then(() => this.props.history.push('/sarahedo/home'))
  };

  handleOptionOneChange = event => {
    console.log('Option One value', event.target.value);
    this.setState({
      newQuestion: {
        ...this.state.newQuestion,
        optionOneText: event.target.value
      }
    })
  }

  handleOptionTwoChange = event => {
    console.log('Option two value', event.target.value);
    this.setState({
      newQuestion: {
        ...this.state.newQuestion,
        optionTwoText: event.target.value
      }
    })
  }

  render() {
    const { newQuestion } = this.state;

    return (
      <div style={{ marginTop: 20 }}>
        <form className='form-group mx-auto col-sm-6' onSubmit={this.handleFormSubmit}>
          <Card bg="light" className="text-center">
            <Card.Header>
              <h1>Create New Question</h1>
            </Card.Header>
            <Card.Body>
              <h5>Complete the question</h5>
              <h3>Would you Rather ...</h3>

              <div>
                <label>
                  <input
                    className='form-control'
                    type="text"
                    name="answer"
                    value={newQuestion.optionOneText || ''}
                    onChange={this.handleOptionOneChange}/>
                </label>
              </div>

              <h5> OR </h5>

              <div>
                <label>
                  <input
                    className='form-control'
                    type="text"
                    name="answer"
                    value={newQuestion.optionTwoText || ''}
                    onChange={this.handleOptionTwoChange}/>
                </label>
              </div>

              <Button variant='outline-info' type='submit'>
                Submit
              </Button>
            </Card.Body>
          </Card>
        </form>
      </div>
    )
  }
}

export default withRouter(connect()(NewQuestionForm));

