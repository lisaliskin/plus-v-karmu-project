import { SET_REG_MODAL } from '../types/modalstype';

const regModalAction = (value) => ({
  type: SET_REG_MODAL,
  payload: value,
});
export default regModalAction;
