import { ADD_ALL_TASKS } from '../types/modalstype';

const tasksReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALL_TASKS:
      // console.log(ADD_ALL_TASKS);
      return [...payload];
    default:
      // console.log('======================');
      return state;
  }
};
export default tasksReducer;
