import axios from "axios";
import { ADD_ALL_CHATS } from "../types/types";

export const addAllChats = (value) => ({
  type: ADD_ALL_CHATS,
  payload: value,
});

export const getAllChats = (value) => async (dispatch) => {
  console.log('polchili id', value);
  const response = await axios.post('/chat/get', value);
  dispatch(addAllChats(response.data));
};

export const createChat = (value) => async (dispatch) => {
  console.log('polchili данные для создания мессенджера', value);
  const response = await axios.post('/chat/new', value);
  console.log('-----> Пришла дата после создания чата', response.data);
  dispatch(getAllChats( response.data ));
};
