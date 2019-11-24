import React, { Component } from 'react';
import { Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class PollListForm extends Component {
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

  render() {
    const { question } = this.props;
    console.log("This is what I am receiving", question)
    return (
      <form className='form-group'>
        <Card bg="light" className="text-center">
          <Card.Header>
            <h3>{question.author} asks</h3>
          </Card.Header>
          <Card.Body>
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

            <Link
              to={`/polls/${question.id}`}
              className='btn btn-outline-info'
            >
              Submit
            </Link>
          </Card.Body>
        </Card>
      </form>
    )
  }
}

export default PollListForm;