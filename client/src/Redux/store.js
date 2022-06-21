import { configureStore } from '@reduxjs/toolkit';
import loginModalReducer from './Reducers/loginModalReducer';
import logUserReducer from './Reducers/logUserReduser';
import regModalReducer from './Reducers/regModalReducer';
import regUserReducer from './Reducers/regUserReducer';
import taskModalReducer from './Reducers/taskModalReducer';

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    regModal: regModalReducer,
    taskModal: taskModalReducer,
    regUser: regUserReducer,
    userSignIn: logUserReducer,
  },
});
export default store;
