import { SET_MESSAGE } from '../types/modalstype';

const messageReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MESSAGE:
      return payload;
    default:
      return state;
  }
};

export default messageReducer;
