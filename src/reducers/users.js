const users = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return [
        ...state,
        //TODO: return all the users
      ]
    case 'LOGIN_USER':
      return [
        ...state,
        //TODO: add user to store as currently logged in user
      ]
    case 'LOGOUT_USER':
      return [
        ...state,
        //TODO: remove user from the store as currently logged in user
      ]
    default:
      return state
  }
}

export default users;