import { SET_LOGIN_MODAL } from '../types/modalstype';

const loginModalReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOGIN_MODAL:
      console.log(payload);
      return payload;
    default:
      return state;
  }
};
export default loginModalReducer;
