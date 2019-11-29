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
      return [
        ...state,
        //TODO: Concat the new question to the list of questions
      ]
    default:
      return state
  }
};

export default questions;