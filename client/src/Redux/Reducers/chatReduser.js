import { ADD_ALL_CHATS } from '../types/types';

const chatReduser = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALL_CHATS:
      console.log('----->OBNOVA CHATS', payload)
      return payload;
    default:
      return state;
  }
};
export default chatReduser;
