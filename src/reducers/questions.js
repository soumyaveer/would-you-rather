const questions = (state={}, action) =>{
  switch(action.type) {
    case 'LOAD_QUESTIONS':
      return {
        ...state,
        ...action.questions
      }
    case 'ANSWER_QUESTION':
      const {answer, qid, authedUser} = action
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    case 'ADD_QUESTION':
      const {question} = action;
      return {
        ...state,
        [question.id]: question
      }
    default:
      return state
  }
};

export default questions;