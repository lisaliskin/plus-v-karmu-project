import axios from 'axios';
import { SET_REG_MODAL } from '../types/modalstype';

const regModalAction = (value) => ({
  type: SET_REG_MODAL,
  payload: value,
});
export default regModalAction;
// export const regUser = (value) => (dispatch) => {
//   axios.post('/auth/signup', value)
//     .then((response) => dispatch(regModalAction(response.data)))
//     .catch((err) => console.log(err));
// };

// export const userLogOut = () => (dispatch) => {
//   axios('/auth/logout')
//     .then((res) => dispatch(regUser({})));
// };
