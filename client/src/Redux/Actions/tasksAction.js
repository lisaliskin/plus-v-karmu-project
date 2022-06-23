import axios from 'axios';
import { ADD_ALL_TASKS, ADD_ONE_TASK } from '../types/modalstype';

export const addAllTasks = (value) => ({
  type: ADD_ALL_TASKS,
  payload: value,
});
export const getAllTasksAction = () => async (dispatch) => {
  const response = await axios('/tasks/task');
  dispatch(addAllTasks(response.data));
};

export const addOneTasks = (value) => ({
  type: ADD_ONE_TASK,
  payload: value,
});
export const getOneTasksAction = () => async (dispatch) => {
  const response = await axios('/tasks/task');
  dispatch(addOneTasks(response.data));
};
