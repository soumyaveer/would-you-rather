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
    case 'ADD_QUESTION_TO_AUTHOR_LIST':
      const {id, author} = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([qid])
        }
      }
    default:
      return state
  }
}

export default users;