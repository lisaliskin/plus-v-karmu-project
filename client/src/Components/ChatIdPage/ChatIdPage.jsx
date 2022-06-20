import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Col, Container, Input, Row,
} from 'reactstrap';
import sendMessage from '../../Redux/Actions/messageAction';

export default function ChatIdPage() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({});

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const messageHandler = (e) => {
    dispatch(sendMessage(input));
  };
  return (
    <Container>
      <Row>
        <Col md-9>
          <Input
            name="text"
            onChange={inputHandler}
            placeholder="input text"
          />
        </Col>
        <Col>
          <Button
            type="submit"
            onClick={messageHandler}
          >
            Отправить
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
