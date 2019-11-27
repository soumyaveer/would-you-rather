
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