import { getUsers } from "../store/DATA";
import { loadUsers, loginUser } from "./index";

const AUTHED_ID = 'sarahedo';

export const handleInitialData = () => {
  return dispatch => {
    return getUsers()
      .then(users => {
        dispatch(loadUsers(users))
        dispatch(loginUser(AUTHED_ID))
      })
  }
};