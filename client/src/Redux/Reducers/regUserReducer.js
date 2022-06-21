import {
  SET_REG_USER,
} from '../types/types';

const regUserReducer = (state = {}, action) => {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case SET_REG_USER:
      return payload;
    default:
      return state;
  }
};
export default regUserReducer;
