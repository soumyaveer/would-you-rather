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

export const answerQuestion = (question, answer) => {
  return {
    type: 'ANSWER_QUESTION',
    question,
    answer
  }
};

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