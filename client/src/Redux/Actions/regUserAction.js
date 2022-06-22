import axios from 'axios';
import { SET_REG_USER } from '../types/types';

export const regUserAction = (value) => ({
  type: SET_REG_USER,
  payload: value,
});

export const regUser = (value) => (dispatch) => {
  axios.post('/auth/signup', value)
    .then((response) => dispatch(regUserAction(response.data)))
    .catch((err) => console.log(err));
};
