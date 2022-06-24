import { ADD_COUNT, NULL_COUNT } from "../types/types";


const countReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COUNT:
      
      return payload;

    case NULL_COUNT:
      console.log("---8888-->NULL_COUNT", payload);
      return null;

    default:
      return state;
  }
};
export default countReducer;
