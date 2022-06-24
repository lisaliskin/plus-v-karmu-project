import { useDispatch, useSelector } from "react-redux";
import chosenAction from "../../Redux/Actions/chosenAction";

export default function SubCatBlock({ elem }) {
  const { chosenSubCat } = useSelector((state) => state);
  const dispatch = useDispatch();
  const changeChosen = () => {
    dispatch(chosenAction(elem));
  };
  return (
    <li
      role="presentation"
      id={elem.id}
      onClick={changeChosen}
      key={elem.id}
      className="mb-1"
      style={{ cursor: 'pointer' }}
    >
      {elem.name}
    </li>

  );
}
