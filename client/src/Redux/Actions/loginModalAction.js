import axios from 'axios';
import { SET_LOGIN_MODAL } from '../types/modalstype';

export const loginModalAction = (value) => ({
  type: SET_LOGIN_MODAL,
  payload: value,
});

export const userSignIn = (value) => (dispatch) => {
  axios.post('/auth/signin', value)
    .then((res) => dispatch(loginModalAction(res.data)))
    .catch((err) => console.log(err));
};
