import axios from 'axios';
import { ADD_ALL_CHATS } from '../types/types';

export const addAllChats = (value) => {
  return {
    type: ADD_ALL_CHATS,
    payload: value,
  }
} 



export const getAllChats = (value) =>  async (dispatch) => {
  console.log('polchili id', value.id)
  const response = await axios.get('/chat/get', value);
  // console.log(response.data)
  dispatch(addAllChats(response.data))
}
