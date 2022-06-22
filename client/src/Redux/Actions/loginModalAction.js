import { SET_LOGIN_MODAL } from '../types/modalstype';

const loginModalAction = (value) => ({
  type: SET_LOGIN_MODAL,
  payload: value,
});

export default loginModalAction;
