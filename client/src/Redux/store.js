import { configureStore } from '@reduxjs/toolkit';
import loginModalAction from './Actions/loginModalAction';
import loginModalReducer from './Reducers/loginModalReducer';
import messageReducer from './Reducers/messageReducer';
import regModalReducer from './Reducers/regModalReducer';
import taskModalReducer from './Reducers/taskModalReducer';
import wsReducer from './Reducers/wsReducer';

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    regModal: regModalReducer,
    taskModal: taskModalReducer,
    message: messageReducer,
    ws: wsReducer,
  },
});
export default store;
