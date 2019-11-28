const users = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }
}

export default users;