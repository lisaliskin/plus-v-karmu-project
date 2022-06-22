import { configureStore } from '@reduxjs/toolkit';
import loginModalAction from './Actions/loginModalAction';
import loginModalReducer from './Reducers/loginModalReducer';
import regModalReducer from './Reducers/regModalReducer';
import taskModalReducer from './Reducers/taskModalReducer';
import tasksReducer from './Reducers/tasksReducer';

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    regModal: regModalReducer,
    taskModal: taskModalReducer,
    tasks: tasksReducer,
  },
});
export default store;
