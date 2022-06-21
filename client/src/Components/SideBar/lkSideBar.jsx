import React from 'react';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
} from 'reactstrap';

export default function lkSideBar() {
  return (
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
  );
}
