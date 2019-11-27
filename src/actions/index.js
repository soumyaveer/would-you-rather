
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

export const addPoll = (answer) => {
  return {
    type: 'ADD_POLL',
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

//TODO: What should be the value of this function. TBD
export const selectUser = (user) => {
  return {
    type: 'SELECT_USER',
    user
  }
};

//TODO: What should be the return value of this function. TBD
export const logOut = (users) => {
  return {
    type: 'LOG_OUT',
    users
  }
}