import { loadQuestions, loadUsers, loginUser } from "./index";
import { getInitialData } from "../utils/api";

const AUTHED_ID = 'sarahedo';

export const handleInitialData = () => {
  return dispatch => {
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(loadUsers(users))
        dispatch(loadQuestions(questions))
        dispatch(loginUser(AUTHED_ID))
      })
  }
};