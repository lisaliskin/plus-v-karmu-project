import { SET_REG_MODAL } from '../types/modalstype';

const regModalReducer = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_REG_MODAL:
      return payload;
    default:
      return state;
  }
};
export default regModalReducer;
