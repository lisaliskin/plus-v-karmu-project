import { GET_ALL_USERS } from '../types/types';

const userReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return payload;
    default:
      return state;
  }
};
export default userReducer;
