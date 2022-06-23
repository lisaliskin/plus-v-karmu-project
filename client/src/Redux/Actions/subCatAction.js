import axios from 'axios';
import { SET_SUB_CATEGORIES } from '../types/modalstype';

export const getAllSubCat = (value) => ({
  type: SET_SUB_CATEGORIES,
  payload: value,
});

export const subCatAction = (value) => (dispatch) => {
  axios('/subCategories', value)
    .then((response) => dispatch(getAllSubCat(response.data)))
    .catch((err) => console.log(err));
};
