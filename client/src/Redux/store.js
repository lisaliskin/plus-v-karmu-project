import { configureStore } from '@reduxjs/toolkit';
import loginModalReducer from './Reducers/loginModalReducer';
import messageReducer from './Reducers/messageReducer';
import logUserReducer from './Reducers/logUserReduser';
import regModalReducer from './Reducers/regModalReducer';
import regUserReducer from './Reducers/regUserReducer';
import taskModalReducer from './Reducers/taskModalReducer';
import tasksReducer from './Reducers/tasksReducer';
import wsReducer from './Reducers/wsReducer';
import chatReduser from './Reducers/chatReduser';

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    regModal: regModalReducer,
    taskModal: taskModalReducer,
    tasks: tasksReducer,
    message: messageReducer,
    ws: wsReducer,
    regUser: regUserReducer,
    userSignIn: logUserReducer,
    chats: chatReduser,
  },
});
export default store;
