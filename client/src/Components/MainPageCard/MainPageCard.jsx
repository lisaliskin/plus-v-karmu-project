import React from "react";
import { Link } from "react-router-dom";
import {
  Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Row,
} from 'reactstrap';

export default function MainPageCard({ el }) {
  const doBtn = 'icons/checkbox.png';
  const message = "icons/envelope.png";
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
            <Link to="/account/task" style={{ marginRight: 'unset' }}>
              <img src={doBtn} alt="done" height={40} className="done" />
            </Link>
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
