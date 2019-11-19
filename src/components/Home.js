import React, { Component } from 'react';
import { getQuestions } from "../store/DATA";
import { Card, Accordion } from "react-bootstrap";

class Home extends Component {
  state = {
    user: {
      answeredQuestions: [],
      unansweredQuestions: []
    }
  };

  filterAnsweredQuestions = (questions) => {
    const user = this.filterCurrentUserData()
    let answeredQuestions = []
    for (const answerId in user.answers) {
      questions.map(question =>
        answerId === question.id && answeredQuestions.push(question)
      )
    }

    console.log(answeredQuestions)
    return answeredQuestions
  }

  filterUnansweredQuestions = (questions) => {
    const user = this.filterCurrentUserData()

    console.log(user.answers)
    let unAnsweredQuestions = [];

    for (const answerId in user.answers) {
      questions.map(question =>
        answerId !== question.id && unAnsweredQuestions.push(question)
      )
    }


    console.log("These questions are not answered", unAnsweredQuestions)
    return unAnsweredQuestions;
  }

  filterCurrentUserData = () => {
    const { users, currentUser } = this.props
    const userDetails = users.filter(user =>
      user.id === currentUser.id
    )
    console.log("Filetring users details", userDetails)
    return userDetails[0]
  }

  extractQuestions = (response) => {
    return Object.values(response)
  }

  updateState = (questions) => {
    let answeredQuestions = this.filterAnsweredQuestions(questions)
    let unansweredQuestions = this.filterUnansweredQuestions(questions)
    console.log("Answered", answeredQuestions)
    console.log("UnAnswered", unansweredQuestions)
    this.setState({
      user: {
        answeredQuestions: answeredQuestions,
        unansweredQuestions: unansweredQuestions
      }
    }, () => {
      console.log("what is the state here", this.state)
    })
  }

  componentDidMount() {
    getQuestions()
      .then(response => {
        console.log(response)
        return this.extractQuestions(response)
      })
      .then(questions => this.updateState(questions))
      .catch(err => console.log(err))
  }

  render() {
    console.log("Props to home", this.props)
    // console.log(this.state.user.unansweredQuestions)
    return (
      <div className='well text-center'>
        <Accordion defaultActiveKey="0">
          <Card>
            <span>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Unanswered Questions
            </Accordion.Toggle>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Answered Questions
            </Accordion.Toggle>
            </span>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {
                  this.state.user.unansweredQuestions.map((question, id) => (
                    <Card bg="light" className="text-center" key={id}>
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
                  ))
                }
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                  {
                    this.state.user.answeredQuestions.map((question, id) => (
                      <Card bg="light" className="text-center" key={id}>
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
                    ))
                  }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default Home;