import { ADD_ALL_TASKS } from '../types/modalstype';

const tasksReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALL_TASKS:
      return payload;
    default:
      return state;
  }
};
export default tasksReducer;
