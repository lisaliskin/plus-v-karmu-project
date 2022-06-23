import axios from "axios";
import { ADD_ALL_CHATS } from "../types/types";

export const addAllChats = (value) => ({
  type: ADD_ALL_CHATS,
  payload: value,
});

export const getAllChats = (value) => async (dispatch) => {
  console.log('polchili id', value.id);
  const response = await axios.post('/chat/get', value);
  console.log('-----> Пришла дата', response.data);
  dispatch(addAllChats(response.data));
};
