import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import LkList from "./LkList";

export default function AccountPage() {
  const [togle1, setTogle1] = useState("0");

  const changeToggleFunc = (num) => {
    if (togle1 === "0") {
      setTogle1("1");
    } else {
      setTogle1("0");
    }
    // const num1 = num;

    // if (num1 === '0') {
    //   return '1';
    // }
    // return '0';
  };
  return (
    <Row>
      <div className="mt-10 col-4">
        <img
          className="rounded-circle col-4"
          width="400px"
          src="https://media.2x2tv.ru/content/images/size/h1080/2022/05/vfyu.jpg"
          alt="avatar"
        />
        <Card className="mt-10 col-12">
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
                className="col-3"
                src="https://cdn-icons-png.flaticon.com/512/1273/1273221.png"
                alt="achivka"
              />
              <img
                className="col-3"
                src="https://cdn-icons-png.flaticon.com/512/1273/1273238.png"
                alt="achivka"
              />
              <img
                className="col-3"
                src="https://cdn-icons-png.flaticon.com/512/1273/1273721.png"
                alt="achivka"
              />
            </div>
            <hr />
            <Link to="/account/chats">
              <Button
                className="chatBtn"
                style={{
                  color: "#FFEC51",
                  backgroundColor: "#7776BC",
                }}
              >
                Чат
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
      <div className="col-8">
        <Row>
          <Accordion open={`${togle1}`} toggle={changeToggleFunc}>
            <div className="col">
              <LkList />
            </div>
          </Accordion>
        </Row>
      </div>
    </Row>
  );
}
