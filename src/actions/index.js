import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

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

// Adds answer selected by the user for the poll question
const answerQuestion = ({ authedUser, qid, answer }) => {
  return {
    type: 'ANSWER_QUESTION',
    qid,
    authedUser,
    answer
  }
};

const addAnswerToUserAnswers = ({ authedUser, qid, answer }) => {
  return {
    type: 'ADD_ANSWER_TO_USER_ANSWERS',
    authedUser,
    qid,
    answer
  }
}

export const handleAnswerSave = (data) => {
  return dispatch => {
    dispatch(answerQuestion(data))
    dispatch(addAnswerToUserAnswers(data))
    return (
      saveQuestionAnswer(data)
        .catch(error => {
          console.warn('Error in handleAnswerSave:', error)
        })
    )
  }
};

// Adds a new question
const addQuestion = (question) => {
  return {
    type: 'ADD_QUESTION',
    question
  }
};

const addQuestionToAuthorList = ({id, author}) => {
  return {
    type: 'ADD_QUESTION_TO_AUTHOR_LIST',
    id,
    author
  }
}

export const handleAddQuestion = ({ optionOneText, optionTwoText, author }) => {
  return (dispatch, getState) => {
    const {authedUser} = getState();
    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addQuestionToAuthorList(question))
      })
      .then(() => dispatch(hideLoading()))
  }
}

export const setAuthedUser = (id) => {
  return {
    type: 'SET_AUTHED_USER',
    id
  }
};