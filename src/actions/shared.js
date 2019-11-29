import { loadQuestions, loadUsers } from "./index";
import { getInitialData } from "../utils/api";
import { showLoading, hideLoading } from 'react-redux-loading';

export const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions, id }) => {
        dispatch(loadUsers(users))
        dispatch(loadQuestions(questions))
        dispatch(hideLoading())
      })
  }
};