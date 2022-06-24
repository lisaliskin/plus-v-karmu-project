import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CardText, Row,
} from 'reactstrap';
import { doSubTask } from "../../Redux/Actions/tasksAction";
import doBtn from '../../icons/unCheck.png';
import message from '../../icons/envelope.png';

export default function MainPageCard({ el }) {
  const dispatch = useDispatch();
  const { userSignIn } = useSelector((state) => state);
  const subscribeHandler = () => {
    dispatch(doSubTask({ el, userSignIn }));
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
            <h4>{el.Subcategory.Category.name}</h4>
            {el.Subcategory.name}
            <h3>{el.description}</h3>
            <CardText>{el.name}</CardText>
          </Row>
        </div>
        <div className="col-2">
          <Row className="d-flex align-items-center justify-content-center">
            <div>
              <img role="presentation" src={doBtn} alt="done" onClick={subscribeHandler} height={40} id="icon" />
            </div>
            <Link to="/account/chats">
              <img src={message} alt="message" height={40} id="icon" />
            </Link>
          </Row>
        </div>
      </div>
    </div>
  );
}
