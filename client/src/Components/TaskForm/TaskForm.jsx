import React from "react";
import { Row } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import message from '../../icons/envelope.png';
import doneBtn from '../../icons/done.png';
import done2Btn from '../../icons/done2.png';
import deleteBtn from '../../icons/delete.png';
import { deleteSubTask, updateStatusTaskAction } from "../../Redux/Actions/tasksAction";
import { getAllUsers } from "../../Redux/Actions/logUserAction";

export default function taskForm1({ el }) {
  const { userSignIn, tasks } = useSelector((state) => state);

  const dispatch = useDispatch();

  const updateStatusTaskHandler = () => {
    dispatch(updateStatusTaskAction({ el, userSignIn }));
    dispatch(getAllUsers());
    dispatch();
  };

  const delSubHandler = () => {
    dispatch(deleteSubTask({ el, userSignIn }));
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
              {tasks.find((elem) => elem.id === el.id).status
                ? <img role="presentation" onClick={updateStatusTaskHandler} src={done2Btn} alt="done" height={40} id="icon" />
                : <img role="presentation" onClick={updateStatusTaskHandler} src={doneBtn} alt="done" height={40} id="icon" />}
              <img role="presentation" src={message} alt="message" height={40} id="icon" style={{ marginTop: '30px' }} />
              <img role="presentation" onClick={delSubHandler} src={deleteBtn} alt="message" height={40} id="icon" style={{ marginTop: '30px' }} />
            </div>
            {/* <Link to="/account/chats" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
