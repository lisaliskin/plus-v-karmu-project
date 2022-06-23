import axios from 'axios';
import { ADD_ALL_TASKS, SET_LOGIN_MODAL } from '../types/modalstype';

export const addAllTasks = (value) => ({
  type: ADD_ALL_TASKS,
  payload: value,
});

const loginModalAction = (value) => ({
  type: SET_LOGIN_MODAL,
  payload: value,
});

export const getAllTasksAction = () => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/tasks1');
    // console.log( '======+++++++++++++++===', response.data.allTasks)
    // console.log(addAllTasks(response.data));
    // console.log(ADD_ALL_TASKS);
    dispatch(addAllTasks(response.data));
  } catch (err) {
    console.log('Error');
    console.log(err);
  }
};
