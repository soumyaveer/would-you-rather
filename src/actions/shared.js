import { _getUsers } from "../utils/_DATA";
import { loadUsers, loginUser } from "./index";

const AUTHED_ID = 'sarahedo';

export const handleInitialData = () => {
  return dispatch => {
    return _getUsers()
      .then(users => {
        dispatch(loadUsers(users))
        dispatch(loginUser(AUTHED_ID))
      })
  }
};