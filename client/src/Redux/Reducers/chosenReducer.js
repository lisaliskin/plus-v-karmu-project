import { CHOSEN_SUB_CAT } from "../types/modalstype";

const chosenReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHOSEN_SUB_CAT:
      return payload;
    default:
      return state;
  }
};
export default chosenReducer;
