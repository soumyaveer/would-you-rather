import React, { Component } from 'react';
import { getQuestions } from "../store/DATA";


class Home extends Component {
  state = {
    questions: []
    // user: {
    //   answeredQuestions: [],
    //   unansweredQuestions: []
    // }
  };

  updateAnsweredQuestionsState = () => {
    const user = this.filterCurrentUserData()
    const answeredQuestions = user.answers
   this.setState({
     user:{
       answeredQuestions: [answeredQuestions]
     }
   })
  }

  filterUnansweredQuestions = (questions) => {
    const user = this.filterCurrentUserData()

    console.log(user.answers)
    let unAnsweredQuestions = [];

    for(const answerId in user.answers){
      for(const questionId in questions){
        answerId !== questionId && unAnsweredQuestions.push(questionId)
      }
    }


    console.log("These questions are not answered", unAnsweredQuestions)
    return unAnsweredQuestions;
  }

  updateUnsAnsweredQuestionsState = (questions) => {
    const unansweredQuestions = this.filterUnansweredQuestions(questions)
    this.setState({
      user: {
        unansweredQuestions: unansweredQuestions
      }
    })
  }

  filterCurrentUserData = () => {
    const {users, currentUser} = this.props
    const userDetails = users.filter(user =>
      user.id === currentUser.id
    )
    console.log("Filetring users details", userDetails)
    return userDetails[0]
  }

  updateState = (response) => {
    this.setState({
      questions: Object.values(response)
    }, () => {
      console.log("whar is the state here", this.state)
    })
  }

  componentDidMount() {
    getQuestions()
      .then(response => {
        console.log(Object.values(response));
        this.updateState(response)
      })
  }

  render(){
    console.log("Props to home", this.props)
    // console.log(this.state.user.unansweredQuestions)
    return(
      <div>
        <ul>
          {
            this.state.questions.map(question => (
              <li>
                Would you rather....
                <br/>
                {question.optionOne.text}
                <br/>
                OR
                <br/>
                {question.optionTwo.text}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Home;