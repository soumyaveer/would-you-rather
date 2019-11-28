const authedUser = (state=[], action) => {
  switch(action.type){
    case 'LOGIN_USER':
      return[
        ...state,
        //TODO: Add logged in user here
      ]
    case 'LOGOUT_USER':
      return [
        ...state,
        //TODO: Remove logged in user from here
      ]
    default: return state;
  }
}

export default authedUser;