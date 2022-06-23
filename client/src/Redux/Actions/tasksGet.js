import axios from 'axios';
import { ADD_ALL_TASKS } from '../types/modalstype';

export const addAllTasks = (value) => ({
  type: ADD_ALL_TASKS,
  payload: value,
});

export const getAllTasksAction = () => async (dispatch) => {
  const response = await axios('http://localhost:3001/getTasks');
  dispatch(addAllTasks(response.data));
};
