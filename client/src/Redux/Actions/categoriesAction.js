import axios from 'axios';
import { SET_CATEGORY } from '../types/modalstype';

export const addAllCat = (value) => ({
  type: SET_CATEGORY,
  payload: value,
});

export const catAction = (value) => (dispatch) => {
  axios('/categories', value)
    .then((response) => dispatch(addAllCat(response.data)))
    .catch((err) => console.log(err));
};
