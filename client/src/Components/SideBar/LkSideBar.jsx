import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Row,
} from 'reactstrap';
import { getAllUsers } from '../../Redux/Actions/logUserAction';
import taskModalAction from "../../Redux/Actions/taskModalAction";
import ava from '../../icons/ava.jpeg';

export default function LkSideBar() {
  const { userSignIn, allUsers } = useSelector((state) => state);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const changeTaskModal = () => {
    dispatch(taskModalAction(true));
  };
  return (
    <Row>
      <div className="col" style={{ marginTop: '50px' }}>
        <img
          className="avatar rounded-circle col-6"
          width="400px"
          src={ava}
          alt="avatar"
        />
        <Card className="col-12 shadow" style={{ marginTop: '30px' }}>
          <CardBody width="300px">
            <CardTitle tag="h5">{`Имя: ${userSignIn.name}`}</CardTitle>
            <CardTitle tag="h5">{`Телефон: ${userSignIn.phone}`}</CardTitle>
            <hr />
            <CardTitle className="text-muted" tag="h6">
              {`Текущая карма: ${allUsers.length && allUsers.find((elem) => elem.id === userSignIn.id).points}`}
              {/* {`Текущая карма: ${userSignIn.points}`} */}

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
            <Link to="/account/chats" style={{ marginRight: "unset" }}>
              <Button
                className="chatBtn"
                style={{
                  color: "#FFEC51",
                  backgroundColor: "#7776BC",
                }}
              >
                Сообщения<span class="badge badge-danger" style={{backgroundColor: 'red'}}>{ count ? <div>{`+ ${count}`}</div> : null}</span>
              </Button>
              {/* { count !== 0 ? <div>{`+ ${count}`}</div> } */}
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
