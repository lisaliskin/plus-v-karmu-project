import axios from 'axios';
import { SET_REG_MODAL } from '../types/modalstype';

export const regModalAction = (value) => ({
  type: SET_REG_MODAL,
  payload: value,
});

export const regUser = (value) => (dispatch) => {
  axios.post('/auth/signup', value)
    .then((response) => dispatch(regModalAction(response.data)))
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
};
