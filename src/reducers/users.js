const users = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return [
        ...state,
        //TODO: return all the users
      ]
    default:
      return state
  }
}

export default users;