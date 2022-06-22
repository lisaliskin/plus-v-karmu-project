import axios from 'axios';
import { SET_TASK_MODAL } from '../types/modalstype';

const taskModalReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TASK_MODAL:
      return payload;
    default:
      return state;
  }
};
export default taskModalReducer;
