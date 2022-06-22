import { combineReducers } from 'redux';
import loginModalReducer from './loginModalReducer';

const rootReducer = combineReducers({
  user: loginModalReducer,
});

export default rootReducer;
