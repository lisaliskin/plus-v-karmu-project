import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Card, CardBody, CardText, Container, Row,
} from 'reactstrap';

export default function () {
  return (
    <Container>
      <Row>
        <Card className="mt-2 row-9">
          <img
            className="rounded-circle col"
            width="50px"
            src="http://zornet.ru/_fr/83/9744669.jpg"
            alt="lkPhoto"
          />
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </CardText>
            <Link to="chat/:id">
              <Button>open</Button>
            </Link>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
}
