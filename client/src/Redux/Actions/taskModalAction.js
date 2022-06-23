import { SET_TASK_MODAL } from '../types/modalstype';

const taskModalAction = (value) => ({
  type: SET_TASK_MODAL,
  payload: value,
});
export default taskModalAction;
