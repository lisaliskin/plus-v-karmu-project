import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import { sendMessage } from '../../Redux/Actions/messageAction';


export default function ChatIdPage() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({})

  const inputHandler = (e) => { 
    setInput((prev) => ({...prev, [e.target.name]:e.target.value}))
  }
  
  const messageHandler = (e) => {
    dispatch(sendMessage(input))
  }
  return (
    <Container>
      <Row>
        <Col md-9>
          <input 
          name="text"
          placeholder="input text"
          onChange={ inputHandler }
          />
        </Col>
        <Col>
          <Button
          type="submit"
          onClick={ messageHandler }
          >
            Отправить
          </Button>
        </Col>
        <></>
      </Row>
    </Container>
  );
}
