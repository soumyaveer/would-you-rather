const questions = (state=[], action) =>{
  switch(action.type) {
    case 'LOAD_QUESTIONS':
      return {
        ...state,
        ...action.questions
      }
    case 'ANSWER_QUESTION':
      return[
        ...state,
        //TODO: filter the question and merge the selected answer to it.
      ]
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