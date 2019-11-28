const authedUser = (state = null, action) => {
  switch(action.type){
    case 'LOGIN_USER':
      return action.id
    case 'LOGOUT_USER':
      return [
        ...state,
        //TODO: Remove logged in user from here
      ]
    default: return state;
  }
}

export default authedUser;