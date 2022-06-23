import React from "react";
import { useSelector } from "react-redux";
import {
  Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle,
} from 'reactstrap';

export default function MainPageCard({el}) {
  return (
    <Card>
      <CardImg
        alt="Card image cap"
        src={`${el.img}`}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">Категория:{el.Subcategory.Category.name}</CardTitle>
        <CardTitle tag="h5">Подкатегория:{el.Subcategory.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {el.description}
        </CardSubtitle>
        <CardText>{el.name}</CardText>
        <Button
          style={{
            color: "#FFEC51",
            backgroundColor: "#7776BC",
            fontFamily: "Menlo",
          }}
        >
          Button
        </Button>
      </CardBody>
    </Card>
  );
}
