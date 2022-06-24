import { CHOSEN_SUB_CAT } from "../types/modalstype";

const chosenAction = (value) => ({
  type: CHOSEN_SUB_CAT,
  payload: value,
});
export default chosenAction;
