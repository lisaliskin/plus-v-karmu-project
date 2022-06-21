import React, { useState } from 'react';
import {
  Accordion,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';
import LkList from './LkList';

export default function AccountPage() {
  const [togle1, setTogle1] = useState('0');

  const changeToggleFunc = (num) => {
    if (togle1 === '0') {
      setTogle1('1');
    } else {
      setTogle1('0');
    }
    // const num1 = num;

    // if (num1 === '0') {
    //   return '1';
    // }
    // return '0';
  };
  return (
    <Row sm={2}>
      <div className="mt-4 col" xs={2}>
        <img
          className="rounded-circle col"
          width="412.992px"
          src="https://media.2x2tv.ru/content/images/size/h1080/2022/05/vfyu.jpg"
          alt="lkPhoto"
        />
        <Card className="mt-2 col-9">
          <CardBody width="300px">
            <CardTitle tag="h5">Имя: Nanaue</CardTitle>
            <CardTitle tag="h5">телефон: 899999239923</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Количество выполненных дел: 10000
            </CardSubtitle>
            <CardText>1111</CardText>
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
