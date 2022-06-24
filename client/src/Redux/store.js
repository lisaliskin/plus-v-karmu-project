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
import countReducer from './Reducers/countReducer';
import chosenReducer from './Reducers/chosenReducer';
import userReducer from './Reducers/userReducer';

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
    count: countReducer,
    chosenSubCat: chosenReducer,
    allUsers: userReducer,
  },
});
export default store;
