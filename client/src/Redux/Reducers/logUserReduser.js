import { DELETE_USER, SET_LOG_USER } from '../types/types';

const logUserReducer = (state = {}, action) => {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case SET_LOG_USER:
      return payload;
    case DELETE_USER:
      return null;
    default:
      return state;
  }
};
export default logUserReducer;
