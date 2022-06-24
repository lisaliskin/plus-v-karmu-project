import axios from 'axios';
import { ADD_ALL_TASKS, ADD_ONE_TASK } from '../types/modalstype';
import { getAllTasksAction } from './tasksGet';

export const addAllTasks = (value) => ({
  // console.log('вызван add аллТАскс после getAlltasks', value);
  type: ADD_ALL_TASKS,
  payload: value,
});
export const getAllTasksAction1 = () => async (dispatch) => {
  console.log('вызван гет аллТАскс после подписания');
  const response = await axios('/tasks/task');
  dispatch(addAllTasks(response.data));
};

export const addOneTasks = (value) => ({
  type: ADD_ONE_TASK,
  payload: value,
});
export const getOneTasksAction = (task) => async (dispatch) => {
  const response = await axios.post('/tasks/task', task);
  dispatch(addOneTasks(response.data));
};
export const doSubTask = (value) => async (dispatch) => {
  console.log('полученные данные для подписания на таск', value);
  const response = await axios.post('/tasks/subTask', value);
  dispatch(getAllTasksAction(response.data));
};

export const deleteSubTask = (value) => async (dispatch) => {
  const response = await axios.post('/tasks/delSubTask', value);
  dispatch(getAllTasksAction(response.data));
};

export const deleteTask = (value) => async (dispatch) => {
  const response = await axios.post('/tasks/delTask', value);
  dispatch(getAllTasksAction(response.data));
};

export const updateStatusTaskAction = (value) => async (dispatch) => {
  const response = await axios.post('/tasks/updateStatusTask', value);
  dispatch(getAllTasksAction(response.data));
};
