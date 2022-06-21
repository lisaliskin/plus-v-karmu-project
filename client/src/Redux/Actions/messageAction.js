import axios from 'axios';
import { SET_MESSAGE } from '../types/modalstype';

export const setUser = (value) => ({
  type: SET_MESSAGE,
  payload: value,
});

export const addMessage = (value) => (dispatch) => {
  axios.post('/message/add', value)
  // console.log('-------> отправлено на бэк  сообщение', value);
    .then((res) => dispatch(setUser(res.data)));
};
