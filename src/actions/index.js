import { saveQuestionAnswer } from "../utils/api";

export const loadUsers = (users) => {
  return {
    type: 'LOAD_USERS',
    users
  }
};

export const loadQuestions = (questions) => {
  return {
    type: 'LOAD_QUESTIONS',
    questions
  }
};

// Adds
const answerQuestion = ( authedUser, qid, answer ) => {
  return {
    type: 'ANSWER_QUESTION',
    qid,
    authedUser,
    answer
  }
};

const addAnswerToUserAnswers = (authedUser, qid, answer) => {
  return {
    type: 'ADD_ANSWER_TO_USER_ANSWERS',
    authedUser,
    qid,
    answer
  }
}

export const handleAnswerSave = (information) => {
  return dispatch => {
    dispatch(answerQuestion(information))
    dispatch(addAnswerToUserAnswers(information))
    return saveQuestionAnswer(information)
      .catch(error => {
        console.warn('Error in handleAnswerSave:', error)
        dispatch(answerQuestion(information))
        alert('Error saving the answer for this question. Try again')
      })
  }
}

export const addQuestion = (question, questionId) => {
  return {
    type: 'ADD_QUESTION',
    id: questionId,
    question
  }
};

export const loginUser = (id) => {
  return {
    type: 'LOGIN_USER',
    id
  }
};

//TODO: What should be the return value of this function. TBD
export const logOutUser = (id) => {
  return {
    type: 'LOGOUT_USER',
    id
  }
}