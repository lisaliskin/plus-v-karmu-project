import { configureStore } from '@reduxjs/toolkit';
import loginModalAction from './Actions/loginModalAction';
import loginModalReducer from './Reducers/loginModalReducer';
import regModalReducer from './Reducers/regModalReducer';

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    regModal: regModalReducer,
  },
});
export default store;
