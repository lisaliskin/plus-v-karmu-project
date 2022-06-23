import { ADD_ALL_TASKS, ADD_ONE_TASK } from '../types/modalstype';

const tasksReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALL_TASKS:
      return payload;
    case ADD_ONE_TASK:
      return payload;
    default:
      return state;
  }
};
export default tasksReducer;
