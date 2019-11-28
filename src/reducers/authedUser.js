const authedUser = (state=[], action) => {
  switch(action.type){
    case 'LOG_IN':
      return[
        ...state,
        //TODO: Add logged in user here
      ]
    case 'LOG_OUT':
      return [
        ...state,
        //TODO: Remove logged in user from here
      ]
    default: return state;
  }
}

export default authedUser;