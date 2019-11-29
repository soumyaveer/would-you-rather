import { loadQuestions, loadUsers, loginUser } from "./index";
import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'sarahedo';

export const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(loadUsers(users))
        dispatch(loadQuestions(questions))
        dispatch(loginUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
};