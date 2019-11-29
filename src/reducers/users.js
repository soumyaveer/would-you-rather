const users = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return {
        ...state,
        ...action.users
      }
    case 'ADD_ANSWER_TO_USER_ANSWERS':
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers:{
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    default:
      return state
  }
}

export default users;