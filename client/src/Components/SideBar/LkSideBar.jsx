import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Row,
} from 'reactstrap';
import taskModalAction from "../../Redux/Actions/taskModalAction";

export default function LkSideBar() {
  const dispatch = useDispatch();
  const changeTaskModal = () => {
    dispatch(taskModalAction(true));
  };
  return (
    <Row>
      <div className="mt-10 col">
        <img
          className="avatar rounded-circle col-6"
          width="400px"
          src="https://media.2x2tv.ru/content/images/size/h1080/2022/05/vfyu.jpg"
          alt="avatar"
        />
        <Card className="mt-10 col-12 shadow">
          <CardBody width="300px">
            <CardTitle tag="h5">Имя: Nanaue</CardTitle>
            <CardTitle tag="h5">Телефон: +7(999)992-39-92</CardTitle>
            <hr />
            <CardTitle className="text-muted" tag="h6">
              Количество выполненных дел: 17
            </CardTitle>
            <hr />
            <CardText tag="h5">Достижения</CardText>
            <div className="d-flex justify-content-between">
              <img
                className="achivka col-3"
                src="https://cdn-icons-png.flaticon.com/512/1273/1273221.png"
                alt="achivka"
              />
              <img
                className="achivka col-3"
                src="https://cdn-icons-png.flaticon.com/512/1273/1273238.png"
                alt="achivka"
              />
              <img
                className="achivka col-3"
                src="https://cdn-icons-png.flaticon.com/512/1273/1273721.png"
                alt="achivka"
              />
            </div>
            <hr />
            <Link to="/account/chats" style={{ marginRight: 'unset' }}>
              <Button
                className="chatBtn"
                style={{
                  color: "#FFEC51",
                  backgroundColor: "#7776BC",
                }}
              >
                Сообщения
              </Button>
            </Link>
            <hr />
            {/* <Link style={{ marginRight: 'unset' }}> */}
            <Button
              onClick={changeTaskModal}
              className="taskBtn"
              style={{
                color: "#FFEC51",
                backgroundColor: "#7776BC",
              }}
            >
              Создать задачу
            </Button>
            {/* </Link> */}
          </CardBody>
        </Card>
      </div>
    </Row>
  );
}
