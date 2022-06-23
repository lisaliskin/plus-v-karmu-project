import { SET_SUB_CATEGORIES } from "../types/modalstype";

const subCatReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SUB_CATEGORIES:
      return payload;
    default:
      return state;
  }
};
export default subCatReducer;
