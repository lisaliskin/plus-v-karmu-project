import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Row,
} from 'reactstrap';
import { doSubTask } from "../../Redux/Actions/tasksAction";

export default function MainPageCard({ el }) {
  const doBtn = 'icons/checkbox.png';
  const message = "icons/envelope.png";
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
            {el.description}
            <CardText>{el.name}</CardText>
          </Row>
        </div>
        <div className="col-2">
          <Row className="d-flex align-items-center justify-content-center">
            {/* <div className="d-flex align-items-center justify-content-center"> */}
            {/* <Link to="/account/task" style={{ marginRight: 'unset' }}> */}
            <div>
              <img src={doBtn} alt="done" onClick={subscribeHandler} height={40} className="done" />
            </div>
            {/* </Link> */}
            <Link to="/account/chats">
              <img src={message} alt="message" height={40} className="message" />
            </Link>
            {/* </div> */}
          </Row>
        </div>
      </div>
    </div>
  );
}
