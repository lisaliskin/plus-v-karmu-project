import axios from 'axios';
import { SET_REG_MODAL } from '../types/modalstype';

export const setUser = (value) => ({
  type: SET_REG_MODAL,
  payload: value,
});

export const regUser = (value) => (dispatch) => {
  axios.post('/user/signup', value)
    .then((response) => dispatch(setUser(response.data)))
    .catch((err) => console.log(err));
};
