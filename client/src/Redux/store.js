import { configureStore } from '@reduxjs/toolkit';
import loginModalReducer from './Reducers/loginModalReducer';
import messageReducer from './Reducers/messageReducer';
import logUserReducer from './Reducers/logUserReduser';
import regModalReducer from './Reducers/regModalReducer';
import regUserReducer from './Reducers/regUserReducer';
import taskModalReducer from './Reducers/taskModalReducer';
import wsReducer from './Reducers/wsReducer';
import chatReduser from './Reducers/chatReduser';
import tasksReducer from './Reducers/tasksReduser';
import categoriesReducer from './Reducers/categoriesReduser';
import subCatReducer from './Reducers/subCatReducer';

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
    categories: categoriesReducer,
    subCat: subCatReducer,
  },
});
export default store;
