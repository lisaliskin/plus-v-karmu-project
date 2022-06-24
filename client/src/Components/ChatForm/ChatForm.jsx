import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Button, Card, CardBody, CardText, Container, Row,
} from 'reactstrap';

export default function ChatForm({el}) {
  // console.log('---->POSL SOOB', el.messages[el.messages.length - 1].text);
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
            {el.messages[el.messages.length - 1].text}
            </CardText>
            <Link to={`chat/${el.id}`}>
              <Button>open</Button>
            </Link>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
}
