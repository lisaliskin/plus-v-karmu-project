import axios from 'axios';
// import { SET_MESSAGE } from '../types/modalstype';

const sendMessage = (value) => {
  axios.post('/message/add', value);
  console.log('-------> отправлено на бэк  сообщение', value);
};

export default sendMessage;
