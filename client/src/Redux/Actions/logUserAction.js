import axios from 'axios';
import { DELETE_USER, SET_LOG_USER } from '../types/types';

export const logUserAction = (value) => ({
  type: SET_LOG_USER,
  payload: value,
});
export const userSignIn = (value) => (dispatch) => {
  axios.post('/auth/signin', value)
    .then((res) => dispatch(logUserAction(res.data)));
};

export const deleteUser = (value) => ({
  type: DELETE_USER,
  payload: value,
});

export const logOut = (value) => (dispatch) => {
  axios.get('/auth/signout', value)
    .then((res) => dispatch(deleteUser({})));
};
