import { ADD_COUNT, NULL_COUNT } from "../types/types";


export const addCount = (value) => ({
  type: ADD_COUNT,
  payload: value,
});

export const nullCount = (value) => ({
  type: NULL_COUNT,
  payload: null,
});

