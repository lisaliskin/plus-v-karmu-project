import React from "react";
import { Link } from "react-router-dom";
import { Row } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import message from '../../icons/envelope.png';
import chooseBtn from '../../icons/unCheck.png';
import deleteBtn from '../../icons/delete.png';
import { deleteSubTask, deleteTask } from "../../Redux/Actions/tasksAction";

export default function SozdanTaskForm({ el }) {
  const { userSignIn } = useSelector((state) => state);

  const dispatch = useDispatch();

  const delTaskHandler = () => {
    dispatch(deleteTask({ el, userSignIn }));
  };
  return (
    <div className="container overflow-hidden p-3 bg-light shadow">
      <div className="row gx-5">
        <div className="col-2">
          <div className="p-3 bg-light">
            <img
              className="avatar rounded-circle col-8"
              src="https://media.2x2tv.ru/content/images/size/h1080/2022/05/vfyu.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div className="col-8">
          <Row className="d-flex align-items-center justify-content-center">
            <h5>{el.Subcategory.Category.name}</h5>
            <h6>{el.Subcategory.name}</h6>
          </Row>
          <p>{el.description}</p>
          <p>{el.name}</p>
        </div>
        <div className="col-2">
          <div className="col-2 d-flex align-items-center justify-content-center" style={{ marginLeft: '50px', marginTop: '15px' }}>
            <div>
              <img role="presentation" onClick={delTaskHandler} src={deleteBtn} alt="message" height={40} id="icon" style={{ marginTop: '30px' }} />
            </div>
            {/* <Link to="/account/chats" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
