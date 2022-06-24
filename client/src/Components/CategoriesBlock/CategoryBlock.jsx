import { useSelector } from "react-redux";
import chosenAction from "../../Redux/Actions/chosenAction";
import SubCatBlock from "./SubCatBock";

export default function CatAndSubCat({ el }) {
  const { subCat, chosenSubCat } = useSelector((state) => state);
  const currSubCat = subCat.filter((elem) => elem.category_id === el.id);
  const arrCount = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  // console.log(`flush-heading${arrCount[el.id + 1]}`);
  // console.log('---+', currSubCat);
  // const currCategory = categories.find((elem) => elem.id === el.category_id);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${arrCount[el.id - 1]}`}>
        <button id={el.id} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${arrCount[el.id - 1]}`} aria-expanded="false" aria-controls={`flush-collapse${arrCount[el.id - 1]}`}>
          {el.name}
        </button>
      </h2>
      <div
        id={`flush-collapse${arrCount[el.id - 1]}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${arrCount[el.id - 1]}`}
        data-bs-parent="#accordionFlushExample"
      >
        <ul className="accordion-body list-unstyled">
          {currSubCat.map((elem) => <SubCatBlock elem={elem} />)}
        </ul>
      </div>
    </div>
  );
}
