import { loadQuestions, loadUsers, setAuthedUser } from "./index";
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
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
};